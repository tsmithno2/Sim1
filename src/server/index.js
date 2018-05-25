const express = require("express"),
  bodyParser = require("body-parser"),
  massive = require("massive"),
  controller = require("./controller");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
const port = 3001;
massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
  app.listen(port, () => console.log(`server is listening on port ${port}`));
});

app.post("/api/products", controller.addProduct);
