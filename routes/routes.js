const routes = require("express").Router();
const TaskController = require("../controller/TaskController");
const ListController = require("../controller/ListController");
const { Router } = require("express");

routes.get("/", ListController.getLists);
routes.post("/create/:id", TaskController.createTask);

routes.post("/createList/", ListController.createList);
routes.get("/getList/:id", ListController.getList);

routes.get("/getById/:idTask/:idList/:method", TaskController.getById);
routes.post("/updateOne/:idTask/:idList", TaskController.updateOneTask);
routes.get("/deleteOne/:idTask/:idList", TaskController.deleteOneTask);
routes.get("/check/:idTask/:idList", TaskController.taskCheck);
routes.get("/getByIdList/:id/:method", ListController.getById);
routes.get("/deleteOneList/:id",ListController.deleteOne);
routes.post("/updateOneList/:id", ListController.updateOne);

module.exports = routes;