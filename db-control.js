// PUT FIRST TO THE BACK OF THE LIST FOR "UNSURE"
// arrayName.push(arrayName[0]); arrayName.shift(arrayName[0]);

// REMOVE THE TOP TO THE "DISLIKE"
// arrayDislikearrayName[]
// arrayName.shift(arrayName[0])



const express = require('express');
var mysql = require('mysql');
var jobsUnseen;
var shortList;
var uninterested;
//Create connection

var db = mysql.createConnection({
  host: 'rds-mysql-10mintutorial.ckuf2q8hjnxx.us-east-1.rds.amazonaws.com',
  // port: '3306',
  user: 'masterUsername',
  password: 'Wloowest20!9',
  //database: "jobsDB"
});


 db.connect(function(err) {
   if (err)
   {
     console.log("ERROR HAPPENED");
     throw err;
   }
   else {
    console.log("MySQL Connected...");
    db.query("CREATE DATABASE jobsDB", function (err, result) {
    if (err)
    {

    }
    console.log("Database created");
  });
  db = mysql.createConnection({
    host: 'rds-mysql-10mintutorial.ckuf2q8hjnxx.us-east-1.rds.amazonaws.com',
    // port: '3306',
    user: 'masterUsername',
    password: 'Wloowest20!9',
    database: 'jobsDB'
  });
    var sql = "CREATE TABLE jobs (jobID INTEGER PRIMARY KEY, jobTitle varchar[50], company [50], skills[200], description[200], url[200]);"
    + " CREATE TABLE shortList (jobID INTEGER PRIMARY KEY, jobTitle varchar[50], company [50], skills[200], description[200], url[200]); "
    + "CREATE TABLE ni (jobID INTEGER PRIMARY KEY, jobTitle varchar[50], company [50], skills[200], description[200], url[200]);";//name VARCHAR(255), address VARCHAR(255))";
    db.query(sql, function (err, result) {
      if (err)
      {

      }
      console.log("Table created");
    });
   }
 });

 export function addJob(jobTitle, company, url, description, skills)
 {
   var newPlace = jobsUnseen.length();
   jobsUnseen.push(newPlace);
   var sql = "INSERT INTO jobs VALUES (" + newPlace +", " + jobTitle + " ," + company +","+ skills+", "+description+","+ url+")";
   db.query(sql, function (err, result) {
     if (err){}
   });
 }

 function addShortList(jobTitle, company, skills, description, url)
 {
   var newPlace = shortList.length();
   shortList.push(newPlace);
   var sql = "INSERT INTO shortList VALUES (" + newPlace +", " + jobTitle + " ," + company +","+ skills+", "+description+","+ url+")";
   db.query(sql, function (err, result) {
     if (err)
     {}
   });
 }

 function addNI(jobTitle, company, skills, description, url)
 {
   var newPlace = uninterested.length();
   uninterested.push(newPlace);
   var sql = "INSERT INTO ni VALUES (" + newPlace +", " + jobTitle + " ," + company +","+ skills+", "+description+","+ url+")";
   db.query(sql, function (err, result) {
     if (err)
     {}
   });
 }

 function delJobs ()
 {
   var rmID = jobs.splice(0,1);
   var sql = "DELETE FROM jobs WHERE jobID = " + rmID;
   db.query(sql, function (err, result) {
     if (err)
     {}
   });

 }

 function delShortList ()
 {
   var rmID = shortList.splice(0,1);
   var sql = "DELETE FROM shortList WHERE jobID = " + rmID;
   db.query(sql, function (err, result) {
     if (err)
     {}
   });

 }

 function delNI ()
 {
   var rmID = uninterested.splice(0,1);
   var sql = "DELETE FROM ni WHERE jobID = " + rmID;
   db.query(sql, function (err, result) {
     if (err)
     {}
   });
 }


 export function peekJob()
 {
   var id = [jobsUnseen[0]];
   var sql = "SELECT company FROM jobs WHERE jobID = " + id;
   db.squery(sql, function(err, result))
   {
     if (err)
     {}
   });
 }

export function peekNI()
{
  var id = jobsUnseen[0];
  var sql = "SELECT company FROM ni WHERE jobID = " + id;
  var out =db.query(sql, function (err, result) {
    if (err)
    {}
  });
  return out;
}

 // function popJobs()
 // {
 //   var sql = "SELECT * from jobs where jobID = 0";
 //   var jobs = db.query(sql, function (err, result) {
 //     if (err)
 //     {
 //
 //     }
 //   });
 //   var numJobs = 0;
 //
 //   var sql = "UPDATE jobs SET jobID = (SELECT MAX(jobID) FROM jobs) WHERE jobID = 0";
 //   db.query(sql, function (err, result) {
 //     if (err)
 //     {
 //
 //     }
 //   });
 //   for (i = 0; i i < )
 //
 //   return;
 // }
 //
 // function getJobs()
 // {
 //   var job = [];
 //   var sql = "SECELT jobTitle from jobs WHERE jobID = 0";
 //   job.push(db.query(sql, function (err, result) {
 //     if (err)
 //     {
 //
 //     }
 //   });)
 //   sql = "SECELT company from jobs WHERE jobID = 0";
 //   job.push(db.query(sql, function (err, result) {
 //     if (err)
 //     {
 //
 //     }
 //   });)
 //   sql = "SECELT skills from jobs WHERE jobID = 0";
 //   job.push(db.query(sql, function (err, result) {
 //     if (err)
 //     {
 //
 //     }
 //   });)
 //   sql = "SECELT description from jobs WHERE jobID = 0";
 //   job.push(db.query(sql, function (err, result) {
 //     if (err)
 //     {
 //
 //     }
 //   });)
 //   sql = "SECELT url from jobs WHERE jobID = 0";
 //   job.push(db.query(sql, function (err, result) {
 //     if (err)
 //     {
 //
 //     }
 //   });)
 //   return job;
 // }
 //
 // function getShortList()
 // {
 //   var job = [];
 //   var sql = "SECELT jobTitle from shortList WHERE jobID = 0";
 //   job.push(db.query(sql, function (err, result) {
 //     if (err)
 //     {
 //
 //     }
 //   });)
 //   sql = "SECELT company from shortList WHERE jobID = 0";
 //   job.push(db.query(sql, function (err, result) {
 //     if (err)
 //     {
 //
 //     }
 //   });)
 //   sql = "SECELT skills from shortList WHERE jobID = 0";
 //   job.push(db.query(sql, function (err, result) {
 //     if (err)
 //     {
 //
 //     }
 //   });)
 //   sql = "SECELT description from shortList WHERE jobID = 0";
 //   job.push(db.query(sql, function (err, result) {
 //     if (err)
 //     {
 //
 //     }
 //   });)
 //   sql = "SECELT url from shortList WHERE jobID = 0";
 //   job.push(db.query(sql, function (err, result) {
 //     if (err)
 //     {
 //
 //     }
 //   });)
 //   return job;
 // }
 //
 // function getNI()
 // {
 //   var job = [];
 //   var sql = "SECELT jobTitle from ni WHERE jobID = 0";
 //   job.push(db.query(sql, function (err, result) {
 //     if (err)
 //     {
 //
 //     }
 //   });)
 //   sql = "SECELT company from ni WHERE jobID = 0";
 //   job.push(db.query(sql, function (err, result) {
 //     if (err)
 //     {
 //
 //     }
 //   });)
 //   sql = "SECELT skills from ni WHERE jobID = 0";
 //   job.push(db.query(sql, function (err, result) {
 //     if (err)
 //     {
 //
 //     }
 //   });)
 //   sql = "SECELT description from ni WHERE jobID = 0";
 //   job.push(db.query(sql, function (err, result) {
 //     if (err)
 //     {
 //
 //     }
 //   });)
 //   sql = "SECELT url from ni WHERE jobID = 0";
 //   job.push(db.query(sql, function (err, result) {
 //     if (err)
 //     {
 //
 //     }
 //   });)
 //   return job;
 // }




//let app = express();

//Create db
//app.get('/createdb', (req, res) => {
  // let sql = 'CREATE DATABASE all (JobID int, Title varchar(255))';

  //let sql = 'CREATE TABLE num (ID INTEGER); INSERT INTO num VALUES (1);';
  //db.query(db, sql, (err, result) => {
    //if (err) {
      //throw err;
    //}
    //console.log(result);
    //res.send('database created...');
  //})

//})

//app.listen('3306', () => {
  //console.log('Server started on port 3000');
//})
