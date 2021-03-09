const express = require("express");
const app = express();
const mongoose =require("mongoose");
const bodyParser = require("body-parser");
const cors =require("cors");


const employeeModel = require("./modules/Employee");
app.use(bodyParser.json());
app.use(cors());


mongoose.connect("mongodb+srv://Ishan:koscielny6@cluster0.xlyrd.mongodb.net/employee?retryWrites=true&w=majority",{
    useNewUrlParser : true,useUnifiedTopology: true 
})

app.post("/insert",async (req,res)=>{
    const name = req.body.name;
    const phone = req.body.phone;
    const address = req.body.address;
    const salary = req.body.salary;
    const employee = new employeeModel({Name : name,Phone :phone,Address:address,Salary:salary});

    try{
        await employee.save();
        res.send("Inserted data");
    }catch(err){
        console.log(err);
    }
})

app.get("/read",async (req,res)=>{
    employeeModel.find({},(err,result)=>{
        if(err){
            res.send(err);
        }
        
        res.send(result);
    })
})

app.put("/update",async (req,res)=>{
    const newName = req.body.newName;
    const newPhone = req.body.newPhone;
    const newAddress = req.body.newAddress;
    const newSalary = req.body.newSalary;
    const id =req.body.id;

    try{
        await employeeModel.findById(id,(error , employeeToUpdate)=>{
            employeeToUpdate.Name = newName;
            employeeToUpdate.Phone = Number(newPhone);
            employeeToUpdate.Address = newAddress;
            employeeToUpdate.Salary = Number(newSalary);
            employeeToUpdate.save();
   
        })
    }
    catch(err){
        console.log(err);
    }
})

app.delete("/delete/:id",async (req,res)=>{
    const id = req.params.id;
    await employeeModel.findByIdAndRemove(id).exec();
})

app.listen(8000,()=>{
    console.log("Listening to port 8000");
});