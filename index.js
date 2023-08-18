// initialization of Express
// to run this server, use command: node index.js

const express = require("express");
const app = express();
const port = 5000;
const path = require('path')
const cors = require('cors')

// CORS making port 5000 to be the origin
app.use(cors({origin: 'http://localhost:5000'}))

// Static page generator
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,'public', 'main.html'))
});

// API call routes
app.get("/hello", (req, res) => {
  const language = req.query.language;

  switch (language) {
    case "French":
      res.send("Bonjour le monde");
      break;
    case "English":
      res.send("Hello world");
      break;
    case "Hindi":
      res.send("Namaste sansaar");
      break;
    //   Error 404 code incase anything goes off
    default:
      res.status(404).send("invalid request");
  }
});

// console logger so we know where the errors might come from
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
