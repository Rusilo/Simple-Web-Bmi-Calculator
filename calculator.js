const express = require('express');
const app = express();


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));


// What happens when the user requests the home route,
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
})



app.post("/", function(req, res) {

var num1 = Number(req.body.n1);
var num2 = Number(req.body.n2);

var result = num1 + num2;


  res.send("The result of the calculation is " + result);
})
// ##########################################################################################################


// When the user goes to the /bmicalculator page
app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator", function(req, res) {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);

  var bmi = weight / (height * height);

  res.send("Your bmi is " + bmi);
})


app.listen(3000, function() {
  console.log("Server started at port 3000");
})
