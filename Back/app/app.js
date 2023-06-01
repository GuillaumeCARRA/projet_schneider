//npm import
import express from "express"; 

//import env variables
import {} from "dotenv/config"; 

//create express server
const app = express(); 

//import routes
import router from './router/index.js'; 

app.use(express.urlencoded({extended: true}));

app.use(express.json()); 

app.use(router); 

const PORT = process.env.PORT || 4000; 
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});