const express = require("express");
const Router = express.Router();
var mysqlConnection = require("../connection");


Router.get("/", (req,res)=>{
    mysqlConnection.query("Select * From Employee",(err,rows, fields)=>{
        if(!err){
            res.send(rows);
        }
        else
        {
            console.log(err);
        }
    })
});
Router.get("/:id", (req,res)=>{
    mysqlConnection.query("Select * From Employee where id = ? ",[req.params.id],(err,rows, fields)=>{
        if(!err){
            res.send(rows);
        }
        else
        {
            console.log(err);
        }
    })
});

Router.delete("/Delete/:id", (req,res)=>{
    mysqlConnection.query("DELETE From Employee where id = ? ",[req.params.id],(err,rows, fields)=>{
        if(!err){
            res.send("Deleted Succcessfully");
        }
        else
        {
            console.log(err);
        }
    })
});

//POST  
Router.post("/Create", (req,res)=>{
    mysqlConnection.query("insert into Employee(id,Name,Gender,Dept,Salary) values ("+parseInt(req.body.id)+",'"+req.body.Name+"','"+req.body.Gender+"','"+req.body.Dept+"',"+parseInt(req.body.Salary)+")",(err,rows, fields)=>{
        if(!err){
           // res.send(rows);
            console.log("1 Row Added.");  
            res.send("1 Row Added.")  
        }
        else
        {
            console.log(err);
        }
    })
})

//POST  
Router.post("/Edit/:id", (req,res)=>{
  
    mysqlConnection.query( "Update Employee Set Name = '"+req.body.Name+"',Gender = '"+req.body.Gender+"',Dept='"+req.body.Dept+"',Salary= "+parseInt(req.body.Salary)+" where id = ?",[req.params.id]
    ,(err,rows, fields)=>{
        if(!err){
           // res.send(rows);
            console.log("Employee Updated");  
            res.send("Employee Updated")  
        }
        else
        {
            console.log(err);
        }
    })
})

module.exports = Router;