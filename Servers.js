var express = require('express');  
  
var bodyParser=require('body-parser');  
var mysqlConnection = require("./connection");
//var urlencoderParser = bodyParser.urlencoded({extended:false});  

const EmlpoyeesRoutes = require("./routes/employees")
var app = express();
var port = process.env.port||3000;  
console.log('Server is started on http://localhost:'+port);  
app.use(bodyParser.json());
app.use("/employees",EmlpoyeesRoutes);

app.listen(3000);
