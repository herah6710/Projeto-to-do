const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    tasks : [{
        task: {
            type: String,
            require: true
        },
        check: {
            type: Boolean,
            default: false,
        },
        date: {
            type: Date,
            default: Date.now(),
        }
   }],

   name : {
        type: String,
        require: true
   }



});



module.exports = mongoose.model("List", ListSchema);