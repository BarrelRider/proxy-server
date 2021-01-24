const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const pagesRoutes = require("./routes/pages.routes");

const app = express();

app.get('/', (req, res) => {
  res.redirect('/api');
});

app.use(cors());
app.use(bodyParser.json());
app.use('/api', pagesRoutes);

app.listen( (process.env.PORT || 5000), () => {
  console.log("Server is running on...");
});
