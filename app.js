const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

// Create an instance of express
const app = express();

// Initialize an array to store items
const items = ["Buy Food", "Cook Food", "Eat Food"];

// Initialize an array to store work items
const workItems = [];

// Set the view engine to use ejs
app.set('view engine', 'ejs');

// Use body-parser middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({extended: true}));

// Express middleware to serve static files from 'public/css' folder
app.use(express.static("public"));

// Define a GET route for the root URL
app.get('/', (req, res) => {

  // Get the current day
  const day = date.getDate();

  // Render the 'list' template, passing in the current day and the items array
  res.render('list', {listTitle: day, newListItems: items});
});

// Define a POST route for the root URL
app.post('/', (req, res) => {
  
     // Get the new item from the request body (which is a class inside the input line called name="newItem" in list.ejs)
     const item = req.body.newItem;
  
  if (req.body.list === "Work") {
 
    // Push the new item to the workItems array
    workItems.push(item);

    // Redirect the user back to the /work URL
    res.redirect('/work');

    } else {
      
    // Push the new item to the items array
  items.push(item);
  
  // Redirect the user back to the root URL
  res.redirect('/');
  }
});



// Define a GET route for the /work URL
app.get('/work', (req, res) => {
  res.render('list', {listTitle: "Work List", newListItems: workItems});
});


// Define a POST route for the /work URL
app.post('/work', (req, res) => {
  // Get the new item from the request body (which is a class inside the input line called name="newItem" in list.ejs)
  const item = req.body.newItem;

  // Push the new item to the workItems array
  workItems.push(item);
  
  // Redirect the user back to the /work URL
  res.redirect('/work');
});

// Define a GET route for the /about URL
app.get('/about', (req, res) => {
  res.render('about');
});

// Start the express server and listen on port 3000
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
