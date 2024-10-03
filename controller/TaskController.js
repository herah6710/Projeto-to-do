const Task = require("../models/Task");
const List = require("../models/List");

global.message = "";
global.type = "";


const createTask = async (req, res) => {
  const task = req.body;

  if (!task.task) {
    message = "É necessário inserir um texto para adicionar a tarefa.";
    type = "danger";
    return res.redirect(`/getList/${req.params.id}`);
  }

  try {

    var list = await List.findById(req.params.id);

    list.tasks.push(task);

    await List.updateOne({ _id: req.params.id }, list);

    message = "Tarefa criada!";
    type = "success";
    return res.redirect(`/getList/${req.params.id}`);

  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const list = await List.findById(req.params.idList);

    if (req.params.method == "update") {

      var tasksList = [];
  
      if(list !== null && list !== '' && list !== undefined){
        tasksList = list.tasks;
      };

      let task;


      tasksList.forEach(ele => {
        if(ele._id == req.params.idTask){
          task = ele;
        }  
      });

      res.render("index", { list, task, taskDelete: null, tasksList, message, type });

    } else {

      var tasksList = [];
  
      if(list !== null && list !== '' && list !== undefined){
        tasksList = list.tasks;
      };

      var taskDelete;

      tasksList.forEach(task => {
        if(task._id == req.params.idTask){
          taskDelete = task;
        }  
      });
      
      res.render("index", { list, task: null, taskDelete, tasksList, message, type });

    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const updateOneTask = async (req, res) => {
  try {
    const task = req.body;

    const list = await List.findById(req.params.idList);       //Pegando a lista que a task pertence


    list.tasks.forEach((ele,i) => {                          //Emcontrando a task a ser atualizada

      if(ele._id == req.params.idTask){
        ele.task = task.task;                            //Substituindo a task antiga pela nova
      }
    })

    await List.updateOne({_id: req.params.idList }, list);      //atualizando a lista no banco
    
    message = "Tarefa atualizada!";
    type = "success";
    res.redirect(`/getList/${req.params.idList}`);

  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const deleteOneTask = async (req, res) => {
  try {
    const list = await List.findById(req.params.idList);

    let index;

    list.tasks.forEach((task, i) => {
      if(task._id == req.params.idTask){
        index = i;
      }
    })

    list.tasks.splice(index,1);

    await List.updateOne({_id: req.params.idList }, list);

    message = "Tarefa excluída.";
    type = "success";
    res.redirect(`/getList/${req.params.idList}`);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const taskCheck = async (req, res) => {
  try {
    const list = await List.findOne({ _id: req.params.idList });

    list.tasks.forEach((ele,i)=>{
      if(ele._id == req.params.idTask){
        ele.check = !ele.check;
      }
    })

    await List.updateOne({ _id: req.params.idList }, list);

    res.redirect(`/getList/${req.params.idList}`);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};




module.exports = {
  createTask,
  getById,
  updateOneTask,
  deleteOneTask,
  taskCheck
};
