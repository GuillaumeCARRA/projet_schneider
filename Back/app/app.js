//npm import
import express from "express"; 

//import env variables
import {} from "dotenv/config"; 

//create express server
const app = express(); 

//import routes
app.get('/', (request, response) => {
    response.send("Hello World");
});

const PORT = process.env.PORT || 4000; 
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});