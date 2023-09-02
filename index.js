const express = require("express");

const server = express();

const router = express.Router();

const users = [
  { id: 1, name: "Carlos", age: 22 },
  { id: 2, name: "Carlos", age: 22 },
];

// GET /users --- TODOS LOS USUARIOS
router.get("/users", (req, res) => {
  return res.status(200).json(users);
});

// GET /users/:id --- OBTENER UN USUARIO MEDIANTE UN PARÁMETRO DINÁMICO
router.get("/users/:id", (req, res) => {
  const params = req.params;
  const id = Number(params.id);
  const findUser = users.find((user) => {
    return user.id === id;
  }); // un usuario o undefined
  if (findUser === undefined) return res.status(404).json(findUser);
  return res.status(200).json(findUser);
});

// POST /users --- CREA UN NUEVO USUARIO

router.post("/users", (req, res) => {
  const body = req.body;
  const { name, age } = body;
  console.log(name, age);
  const newUser = {
    id: users.length + 1,
    age,
    name,
  };
  users.push(newUser);
  return res.status(201).json(newUser);
});

server.use(express.json());
server.use(router);

server.listen(3000, () => {
  console.log("server is listening");
});
