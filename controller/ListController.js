const Task = require("../models/Task");
const List = require("../models/List");
const mongoose = require('mongoose');


const getLists = async (req,res) => {

    const lists = await List.find();
  

    return res.render("listIndex", {
      lists,
      list: null,
      listDelete: null,
      message,
      type,
    });


}

const createList = async (req,res) => {

  if (!req.body.name) {
    message = "É necessário inserir um texto para criar uma lista.";
    type = "danger";
    return res.redirect("/");
  }

    const list = {
        name: req.body.name,
        tasks: []
    }

    await List.create(list);
    
    message = "Lista criada!";
    type = "success";

    return res.redirect("/");
}


const getList = async (req, res) => {
 

    if(!mongoose.isObjectIdOrHexString(req.params.id)){
      return res.redirect("/");
    }

    const list = await List.findOne({ _id: req.params.id });

    var tasksList = [];
  
    if(list !== null && list !== '' && list !== undefined){
      tasksList = list.tasks;
    };
    
  
    setTimeout(() => {
      message = "";
    }, 1000);
  
    return res.render("index", {
      tasksList,
      list,
      task: null,
      taskDelete: null,
      message,
      type,
    });
  
  
  }

  const getById = async (req, res) => {
    try {
      const lists = await List.find();

      if (req.params.method == "update") {
        
        const list = await List.findById(req.params.id);

        var tasksList = [];
    
        if(list !== null && list !== '' && list !== undefined){
          tasksList = list.tasks;
        };
  
  
        res.render("listIndex", { list:list, lists, listDelete:null, message, type });
  
      } else {
        const list = await List.findById(req.params.id);
        let listDelete = list
  
        res.render("listIndex", { list:null, lists, listDelete, message, type });
  
      }
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  };


  const deleteOne = async (req,res) =>{

    if(!mongoose.isObjectIdOrHexString(req.params.id)){
      return res.redirect("/");
    }

    await List.deleteOne({_id : req.params.id});

    message = "Lista deletada com sucesso";

    res.redirect("/");

  }

  const updateOne = async (req,res) =>{

    if(!mongoose.isObjectIdOrHexString(req.params.id)){
      return res.redirect("/");
    }

    let list = await List.findById(req.params.id);

    list.name = req.body.task;
    
    await List.updateOne({_id: req.params.id}, list);

    message = "Lista atualizada com sucesso";
    type="success"

    res.redirect("/");

  }

module.exports = {
    getLists,
    createList,
    getList,
    getById,
    deleteOne,
    updateOne
  };