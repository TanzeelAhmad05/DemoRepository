var mysql = require('mysql');  
var mysqlConnection = mysql.createConnection({
    host : "localhost",
    user : "root" ,
    password : "Tanzeel2447",
    database : "Demodb",
    insecureAuth : true,
    multipleStatements : true
});


mysqlConnection.connect((err)=>{
    if (!err)
    {
        //console.log(err); 
        console.log("Connected");
    }
    else
    {
        console.log("Connection Failed",err);
    }
});
module.exports = mysqlConnection;