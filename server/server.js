const express = require("express");
const connectDb = require("./config/dbConnection");
const detailsRoutes = require("./routes/detailsRoutes");
// const errorHandler = require("./middleware/errorHandler");
const app = express();
const cors = require("cors");

connectDb();

app.use(express.json());
app.use(cors());
app.use("/details", detailsRoutes);

app.listen(5000, () => {
  console.log("server is running ");
});
