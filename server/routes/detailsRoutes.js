const express = require("express");
const routes = express.Router();
const detailsController = require("../controllers/detailsControllers");

routes
  .route("/")
  .get(detailsController.getAllDetails)
  .post(detailsController.createDetails);

routes
  .route("/:id")
  .get(detailsController.getDetailsById)
  .put(detailsController.updateDetailsById)
  .delete(detailsController.deleteDetailsById);

module.exports = routes;
