//constantes
const express = require("express");
const app = express();
const path = require("path");
const port = 4000; 
const routes = require("./routes/routes")
const connectToDb = require("./dtbase/db");

connectToDb();

app.use(express.urlencoded({extended:false}));  //aqui 
app.use(express.json()); // aqui

//TEM QUE ESTAR ANTES DO QUE TA EM BAIXO

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(routes);


//tipos de rota
app.get("/index", (req, res) => {
  console.log(req);

  res.render("index");
});

app.listen(4000, () => {
    console.log(`Sucesso - Aplicação rodando em http://localhost:4000`);
});
