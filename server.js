const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const pagesRoutes = require("./routes/pages.routes");

const app = express();

let corsOptions = {
  origin: "http://localhost:8080",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/api', pagesRoutes);

app.listen(3000, () => {
  console.log("Server is running on 3000");
});
