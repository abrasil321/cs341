var express = require("express");
var app = express();
var port = process.env.PORT || 5000;

app.use(express.static("public"));

app.set("views", "view");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
	console.log("Received a request for /");

	res.write("This is the root.");
	res.end();
});


app.get("/calculate", function(request, response) {
  const weight = request.query.weight;
  const types = request.query.types;
  var price = "";

  if(types ==  "Stamped"){
    if(weight <= 1){
      price = weight * 0.55;
    }
    else if(weight <= 2){
      price = weight * 0.77;
    }
    else if(weight <= 3){
      price = weight * 0.85;
    }
    else {
      price = weight;
    }
  }
  else if(types ==  "Metered"){
    if(weight <= 1){
      price = weight * 0.50;
    }
    else if(weight <= 2){
      price = weight * 0.65;
    }
    else if(weight <= 3){
      price = weight * 0.80;
    }
    else {
      price = weight * 0.95;
    }
  }
  else if(types ==  "Flats"){
    if(weight <= 1){
      price = weight;
    }
    else if(weight <= 2){
      price = weight * 1.20;
    }
    else if(weight <= 3){
      price = weight * 1.40;
    }
    else if(weight <= 4){
      price = weight * 1.60;
    }
    else if(weight <= 5){
      price = weight * 1.80;
    }
    else if(weight <= 6){
      price = weight * 2;
    }
    else if(weight <= 7){
      price = weight * 2.20;
    }
    else if(weight <= 8){
      price = weight * 2.40;
    }
    else if(weight <= 9){
      price = weight * 2.60;
    }
    else if(weight <= 10){
      price = weight * 2.80;
    }
    else if(weight <= 11){
      price = weight * 3;
    }
    else if(weight <= 12){
      price = weight * 3.20;
    }
    else {
      price = weight * 3.40;
    }
  }
  else if(types ==  "Retail"){
    if(weight <= 4){
      price = weight * 3.80;
    }
    else if(weight <= 8){
      price = weight * 4.60;
    }
    else {
      price = weight * 5.30;
    }
  }
  
	console.log("Received a request for the home page");
	
	var params = {price: price};

	response.render("result", params);
});


app.listen(port, ()=> {
	console.log("The server is up and listening on port 5000");
});

// function calculateRate(){
  
  
// }
