const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    Name:{
        type : String,
        required : true,
    },
    Phone:{
        type : Number,
        required : true,
    },
    Address:{
        type : String,
        required : true,
    },
    Salary:{
        type: Number,
        required : true,
    },
});

const employee = mongoose.model("employee",employeeSchema);
module.exports = employee  