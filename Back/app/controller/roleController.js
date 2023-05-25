import Role from "../models/role.js";
import {} from "../models/index.js";

const getAllRoles = async (req, res) => {
    try {
        const roles = await Role.findAll();

        res.json({data: roles}); 
    } catch (error) {
        console.log(error);
        res.status(500).json({error}); 
    }
}

const getOneRole = async (req, res) => {
    try {
        const roleId = req.params.id; 

        const oneRole = await Role.findOne({
            where: ({id: roleId})
        });

        res.json({data: oneRole}); 

    } catch (error) {
        console.log(error);
        res.status(500).json({error}); 
    }
}

const createRole = async(req, res) => {
    
    const roleData = {
        label: req.body.label
    }
    
    try {

        const role = await Role.create(roleData);

        res.status(201).json(role); 
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
}

const updateRole = async(req, res) => {
    try {

        const updatedRole = await Role.findOne({
            where: {id: req.params.id}
        }); 

        if(!updatedRole) {
            return res.status(404).json({error: "aucun rôle"}); 
        }

        const {
            label
        } = req.body

        if(label) {
            updatedRole.label = label; 
        }

        await updatedRole.save();

        res.json({data: updatedRole});
        
    } catch (error) {
        console.log(error);

        res.status(500).json({error});
    }
}

const deleteRole = async (req, res) => {
    try {
        const deletedRole = await Role.findOne({
            where: {id: req.params.id}
        }); 


        if(!deletedRole) {
            return res.status(404).json({error: "Aucun role"});
        }

        await deletedRole.destroy();

        res.json({data: deletedRole});

    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
}

export default {
    getAllRoles, 
    getOneRole, 
    createRole, 
    updateRole,
    deleteRole
}