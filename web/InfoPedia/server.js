var express = require("express");
var app = express();
const bodyParser = require("body-parser");
var port = process.env.PORT || 5000;

    // DATABASE CONNECT ---------------------------------------------------------------------------
const { Router, json } = require('express');
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgres://fciliwkywcpjab:edb33af05eeb9086ac782a2d841c840e9bfaa61ba60807fe03f8ac793506c766@ec2-3-215-83-17.compute-1.amazonaws.com:5432/dahrrrb5qk3sk5",
  ssl: {
    rejectUnauthorized: false
  }
});

    //  USE's -------------------------------------------------------------------------------------
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

    //  SET's -------------------------------------------------------------------------------------
app.set("views", "view");
app.set("view engine", "ejs");

    // ROOT ---------------------------------------------------------------------------------------
app.get("/", function(req, res) {
	console.log("Received a request for /");
  res.write("this is the rooot");
	res.end();
});

   // SIGN IN -------------------------------------------------------------------------------------
app.get("/sign", function(request, response) {
  console.log("Received a request for /sign");
  response.render("sign");
  response.end();
});

    //NEW USER ------------------------------------------------------------------------------------
app.get("/new_user", function(request, response) {
  console.log("Received a request for /new_user");
  response.render("new_user");
  response.end();
});

    // DISPLAY ARTICLE TITLES ---------------------------------------------------------------------
app.get("/search", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT DISTINCT title, author FROM articles');
    const results = { 'results': (result) ? result.rows : null};
    //console.log(results);
    res.render('search', results );
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
 
  console.log("Received a request for the search.ejs");
  res.end();
});

   // DISPLAY An ARTICLE --------------------------------------------------------------------------
app.get("/article", async (req, res) => {
  const title = req.query.title;
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT article, title FROM articles WHERE title=' + "'"  + title + "'");
    const results = { 'results': (result) ? result.rows : null};
    res.render('article', results );
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
 
  console.log("Received a request for the article.ejs");
  res.end();
});

    // SEARCH QUERIES -----------------------------------------------------------------------------
app.get("/searching", async (req, res) => {
  const titl = req.query.title;
  const title = titl.charAt(0).toUpperCase() + titl.slice(1);
  const autho = req.query.author
  const topi = req.query.topic;
  const topic = topi.charAt(0).toUpperCase() + topi.slice(1);
  
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT DISTINCT title, author FROM articles WHERE title LIKE ' + "'%" + title + "%'" + ' AND author LIKE ' + "'%" + autho + "%'" + ' AND topic LIKE ' + "'%" + topic + "%'");
    const results = { 'results': (result) ? result.rows : null};
    //console.log(results);
    res.render('search', results );
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
    
  console.log("Received a request for the article.ejs");
  res.end();
});

      // NEW USER ---------------------------------------------------------------------------------
app.post("/profile", async (req, res) => {
  const first = req.body.fname;
  const last = req.body.lname;
  const email = req.body.email; 
  const prof = req.body.prof; 
  const user = req.body.newusername; 
  const pass = req.body.repassw; 

  try {
    const client = await pool.connect();
    const result = await client.query('INSERT INTO users (fname, lname, email, profession, username, password) VALUES (' + "'"  + first + "'" + ', ' + "'"  + last + "'" +', ' + "'"  + email + "'" + ','+ "'"  + prof + "'" + ',' + "'"  + user + "'" + ',' + "'"  + pass + "')");
    
    const result2 = await client.query('SELECT fname, lname, email, profession, username FROM users');
    const results2 = { 'results2': (result2) ? result2.rows : null};
    //console.log(results2);
    res.render('profile', results2 );
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }

  
  console.log("Received a request for the profile.ejs");
  res.end();
});


    // OLD USER ------------------------------------------------------------------------------------
app.post("/getprofile", async (req, res) => {
  
  const olduser = req.body.username; 
  const oldpass = req.body.pass; 

  try {
    const client = await pool.connect();
    const result = await client.query('SELECT fname, lname, email, profession, username, password FROM users');
    const results = { 'results': (result) ? result.rows : null};
    //console.log(results);
    JSON.stringify(results);
    results.results.forEach(function(o) { 
      var dbUser = o.username; 
      var dbPass = o.password;
      console.log(dbPass, dbUser);
      if(oldpass == dbPass && olduser == dbUser ){
        res.render('profile', results );
      }
    });
    if((oldpass != dbPass && olduser != dbUser) || (oldpass != dbPass && olduser == dbUser) || (oldpass == dbPass && olduser != dbUser)){
      res.send("404: You do not have permission to access this page! ");
    }
    client.release();
  } catch (err) {
    console.error(err);
    res.send("You do not have permission to access this page! ");
  }
  
  console.log("Received a request for the profile.ejs");
  res.end();
});


app.listen(port, ()=> {
	console.log("The server is up and listening on port " + port);
});

