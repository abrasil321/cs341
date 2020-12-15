var express = require("express");
var app = express();
const bodyParser = require("body-parser");
var session = require('express-session');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
var port = process.env.PORT || 5000;
var sess = '';
var resultado;
var the_user;
var create;

    // DATABASE CONNECT --------------------------------------------------------------------------
const { Router, json } = require('express');
const { Pool } = require('pg');
const { render } = require("ejs");
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
app.use(session({ secret: 'vem_monstro', resave: true, saveUninitialized: true, maxAge: Date.now() + (36 * 100 * 1000) })); 

    //  SET's -------------------------------------------------------------------------------------
app.set("views", "view");
app.set("view engine", "ejs");

    // ROOT ---------------------------------------------------------------------------------------
app.get("/", function(req, res) {   

      console.log("Received a request for /");
      res.write("this is the root");
      res.end();
});


    //LOGIN ------------------------------------------------------------------------------------
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
    const result = await client.query('SELECT DISTINCT title, author FROM articles WHERE title LIKE ' + "'%" + title + "%'" 
    + ' AND author LIKE ' + "'%" + autho + "%'" + ' AND topic LIKE ' + "'%" + topic + "%'");

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


      // CREATE NEW USER ---------------------------------------------------------------------------------
app.post("/profile", async (req, res) => {
  const first = req.body.fname;
  const last = req.body.lname;
  const email = req.body.email; 
  const prof = req.body.prof; 
  const user = req.body.newusername; 
  const password = req.body.repassw; 
  const passHash = bcrypt.hashSync(password, salt);
  

  try {
    const client = await pool.connect();
    const result1 = await client.query('INSERT INTO users (fname, lname, email, profession, username, password) VALUES (' 
    + "'"  + first + "'" + ', ' + "'"  + last + "'" +', ' + "'"  + email + "'" + ','+ "'"  + prof + "'" + ',' 
    + "'"  + user + "'" + ',' + "'"  + passHash + "')");
    
    const result = await client.query('SELECT fname, lname, email, profession, username, password FROM users');
    const results = { 'results': (result) ? result.rows : null};

    const article = await client.query('SELECT DISTINCT title, author FROM articles WHERE username=' + "'" + user + "'");
    const articles = { 'articles': (article) ? article.rows : null};
    JSON.stringify(articles);
    
    //console.log(resultado);
    JSON.stringify(results);
    results.results.forEach(function(o) { 
      var dbUser = o.username; 
      
      //console.log(dbPass, dbUser);
      if(user == dbUser){
        var fname = o.fname;
        var lname = o.lname;
        var param = {"info":[{"fname": fname, "lname": lname}]};
        param.info.push(articles.articles);

        const info = param;
        JSON.stringify(param);
        resultado = info;
        //console.log(info.info[0].fname);
        res.render('profile', info);
        sess = 'allowed'; 
        the_user = dbUser;
      }
    })
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});

	
  // SIGN IN -------------------------------------------------------------------------------------
app.get("/sign", function(request, response){
  if(sess == ''){
    response.render("sign");
    response.end();
  }
  else{
      const info = resultado;
      response.render('profile', info);
      response.end();
  }
  console.log("Received a request for /sign");
});


    // OLD USER ------------------------------------------------------------------------------------
app.post("/getprofile", async (req, res) => {
  
  const olduser = req.body.username; 
  const oldpass = req.body.pass;
  // console.log(olduser, oldpass);
  const dele = req.body.title;
  const info = resultado;

  if(sess != ''){

    if(dele){
      try {
        const client = await pool.connect();
        const result0 = await client.query('DELETE FROM articles WHERE title=' + "'" + dele + "' " + 'AND username=' 
        + "'" + the_user + "'");

        const result = await client.query('SELECT fname, lname, email, profession, username, password FROM users');
        const results = { 'results': (result) ? result.rows : null};

        const article = await client.query('SELECT DISTINCT title, author FROM articles WHERE username=' 
        + "'" + the_user + "'");

        const articles = { 'articles': (article) ? article.rows : null};
        JSON.stringify(articles);
        JSON.stringify(results);
        resultado = '';
        results.results.forEach(function(o) { 
          var dbUser = o.username; 
          
          if((the_user == dbUser) ){
            var fname = o.fname;
            var lname = o.lname;
            
            var param = {"info":[{"fname": fname, "lname": lname}]};
            param.info.push(articles.articles);

            const info = param;
            JSON.stringify(param);
            resultado = info;
            res.render('profile', info);
            sess = 'allowed'; 
            the_user = dbUser;
          }
        })
        client.release();
      }catch(err){
        console.error(err);
        res.send("Error " + err);
      }
    }
    else{
      const info = resultado;
      res.render('profile', info);
    }
    
    
  }
  else{
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT fname, lname, email, profession, username, password FROM users');
      const results = { 'results': (result) ? result.rows : null};

      const article = await client.query('SELECT DISTINCT title, author FROM articles WHERE username=' 
      + "'" + olduser + "'");

      const articles = { 'articles': (article) ? article.rows : null};
      JSON.stringify(articles);
      
      JSON.stringify(results);
      results.results.forEach(function(o) { 
        var dbUser = o.username; 
        var hash = o.password;
        
        if((olduser == dbUser) && (bcrypt.compareSync(oldpass, hash))){
          var fname = o.fname;
          var lname = o.lname;
          
          var param = {"info":[{"fname": fname, "lname": lname}]};
          param.info.push(articles.articles); 

          const info = param;
          JSON.stringify(param);
          resultado = info;
          res.render('profile', info);
          sess = 'allowed'; 
          the_user = dbUser;
        }
      })
      client.release();
    } catch (err) {
      console.error(err);
      res.send("You do not have permission to access this page! ");
    }
    
  }  

  console.log("Received a request for the profile.ejs");
  res.end();
});

// app.post("/getprofile", mycontroller.updateUser);


    // CREATE ARTICLE --------------------------------------------------------------------------------
app.get("/create", async(req, res)=>{

  const title = req.query.title;
  const topic = req.query.topic;
  const author = req.query.author;
  const ref = req.query.ref;
  const articlee = req.query.article;
  

  if(create == "yes"){
    try{
      const client = await pool.connect();
      const result0 = await client.query('INSERT INTO articles (title, topic, author, ref, article, username) VALUES (' 
      + "'"  + title + "'" + ', ' + "'"  + topic + "'" +', ' + "'"  + author + "'" + ','+ "'"  + ref + "'" + ',' 
      + "'"  + articlee + "'" + ',' + "'"  + the_user + "')");

      const result = await client.query('SELECT fname, lname, email, profession, username, password FROM users');
      const results = { 'results': (result) ? result.rows : null};

      const article = await client.query('SELECT DISTINCT title, author FROM articles WHERE username=' 
      + "'" + the_user + "'");

      const articles = { 'articles': (article) ? article.rows : null};
      JSON.stringify(articles);
      JSON.stringify(results);
      resultado = '';
      results.results.forEach(function(o) { 
        var dbUser = o.username; 
        
        if((the_user == dbUser) ){
          var fname = o.fname;
          var lname = o.lname;
          
          var param = {"info":[{"fname": fname, "lname": lname}]};
          param.info.push(articles.articles);

          const info = param;
          JSON.stringify(param);
          resultado = info;
          res.render('profile', info);
        }
      })
      create = "no";
      client.release();
    }
    catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  }
  else{
    res.render("create");
    create = "yes";
    client.release();
  }
  
  console.log("Received a request for the create.ejs");
  res.end();
});


app.listen(port, ()=> {
	console.log("The server is up and listening on port " + port);
});

