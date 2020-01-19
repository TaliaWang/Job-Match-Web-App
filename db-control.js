const express = require('express');
const mysql = require ('mysql');

//Create connection
const db = mysql.createConnection({
  host : 'rds-mysql-10mintutorial.ckuf2q8hjnxx.us-east-1.rds.amazonaws.com',
  user : 'adminUsername',
  password : 'Wloowest20!9'
});

//connection
 db.connect((err) => {
   if(err)
   {
     throw err;
   }
    console.log('MySQL Connected...');
 });

const app = express();

//Create db
app.get('/createdb', (req, res) => {
  // let sql = 'CREATE DATABASE AcademicWorkSpace';
  // db.query(sql, (err, result) => {
  //   if (err) {
  //     throw err;
  //   }
  //   console.log(result);
  //   res.send('database created...');
  // })

})

app.listen('3306', () => {
  console.log('Server started on port 3000');
})
