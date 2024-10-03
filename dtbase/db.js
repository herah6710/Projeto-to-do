const mongoose = require("mongoose");

const connectToDb = () => {
    mongoose.connect(
        "mongodb+srv://root:admin@todolist.vahjoot.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then (() => 
        console.log("Banco de dados conectado."))
   .catch((err) => console.log(err));
   
};

module.exports = connectToDb;
