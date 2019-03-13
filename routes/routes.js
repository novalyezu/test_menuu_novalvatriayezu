const router = require("express").Router();
const fetch = require("node-fetch");

router.get("/todos", function(req, res) {
  const ques = req.query;

  function todos() {
    return fetch("http://jsonplaceholder.typicode.com/todos");
  }

  const getTodos = async () => {
    const todo = await todos();
    const result = await todo.json();
    res.status(200).json(result);
  };

  const getTodosLimit = async () => {
    const todo = await todos();
    const result = await todo.json();
    const newResult = result.filter(function(data) {
      return data.id >= ques.idstart && data.id <= ques.idend;
    });
    res.status(200).json(newResult);
  };

  if (Object.keys(ques).length === 0) {
    getTodos();
  } else {
    getTodosLimit();
  }
});

module.exports = router;
