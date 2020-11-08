const express = require("express");
const app = express();

app.use(express.json());
const todos = [
  {
    id: "1",
    task: "First Todo",
    checked: true,
  },
  {
    id: "2",
    task: "One & Half Todo",
    checked: false,
  },
  {
    id: "3",
    task: "Second Todo",
    checked: true,
  },
];

app.get("/todo", (req, res, next) => {
  const myJson = JSON.stringify(todos);
  res.send(myJson);
  //next();
});

app.get("/todo/:id", (req, res, next) => {
  const { id } = req.params;
  const todolist = todos.find((elem) => elem.id == id);
  res.send(todolist);
  //next();
});

app.post("/todo", (req, res, next) => {
  const task = req.body;
  task.id = todos.length;
  task.checked = false;
  todos.push(task);
  console.log(task);
  res.send(task);
});

app.put("/todo/:id", (req, res, next) => {
  const { task } = req.body;
  const { id } = req.params;

  const upTodo = todos.findIndex((elem) => elem.id == id);
  todos[upTodo] = {
    ...todos[upTodo],
    task: task,
  };

  res.send(todos[upTodo]);
});

app.delete("/todo/:id", (req, res, next) => {
  const { id } = req.params;
  const upTodo = todos.findIndex((elem) => elem.id == id);
});
//app.use((err, req, res, next) => {});

const PORT = 5000;

app.listen(PORT, () =>
  console.log(`listening on port http://localhost:${PORT}`)
);
