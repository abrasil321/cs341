var express = require("express");
var app = express();
var port = process.env.PORT || 5000;

    // DATABASE CONNECT
const { Router, json } = require('express');
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgres://fciliwkywcpjab:edb33af05eeb9086ac782a2d841c840e9bfaa61ba60807fe03f8ac793506c766@ec2-3-215-83-17.compute-1.amazonaws.com:5432/dahrrrb5qk3sk5",
  ssl: {
    rejectUnauthorized: false
  }
});

    //  STATIC FILE
app.use(express.static("public"));

app.set("views", "view");
app.set("view engine", "ejs");

    // ROOT
app.get("/", function(req, res) {
	console.log("Received a request for /");
  res.write("this is the rooot");
	res.end();
});

   // SIGN IN
app.get("/sign", function(request, response) {
  console.log("Received a request for /sign");
  response.render("sign");
  request.end();
});

    //NEW USER
app.get("/new_user", function(request, response) {
  console.log("Received a request for /new_user");
  response.render("new_user");
  request.end();
});

    // DISPLAY ARTICLE TITLES
app.get("/search", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT title FROM articles');
    const results = { 'results': (result) ? result.rows : null};
    console.log(results);
    res.render('search', results );
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
 
  console.log("Received a request for the search.ejs");
  res.end();
});

//const weight = request.query.weight;
//const types = request.query.<%= o.title %>;

app.listen(port, ()=> {
	console.log("The server is up and listening on port 5000");
});

