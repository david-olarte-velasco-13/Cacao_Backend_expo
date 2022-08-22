import config from "./config";
const mongoose = require('mongoose')
require("dotenv").config()



export const dbConnection = async () => {
    try {
        await mongoose.connect(config.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
    
        })
        .then(() => console.log('Base de datos online'))

    } 
    catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }

}

