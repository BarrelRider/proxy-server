const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const pagesRoutes = require("./routes/pages.routes");

const app = express();

app.set('port', (process.env.PORT || 5000))

let corsOptions = {
  origin: "http://localhost:8080",
};

app.get('/', (req, res) => {
  var result = "App Running";
  res.send(result);
});

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/api', pagesRoutes);

app.listen(app.get('port'), () => {
  console.log("Server is running on: ", app.get('port'));
});
