const express = require("express");

const server = express();

const router = express.Router();

const users = [
  { id: 1, name: "Carlos", age: 22 }, //0
  { id: 2, name: "Carlos", age: 22 }, //1
];

// CRUD - CREA - LEER - ACTUALIZAR - ELIMINAR

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
  if (findUser === undefined) {
    return res.status(404).json({ error: "El usuario no existe" });
  }
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

// PUT /users/:id --- ACTUALIZAR TOTALMENTE UN USUARIO

router.put("/users/:id", (req, res) => {
  const body = req.body;
  const params = req.params;
  const id = Number(params.id);
  const userIndex = users.findIndex((user) => {
    return user.id === id;
  }); // el indice del item en el arreglo o un -1
  console.log(userIndex);
  if (userIndex === -1) {
    return res.status(404).json({ error: "El usuario no existe" });
  }
  const updatedUser = {
    ...body,
    id,
  };
  users[userIndex] = updatedUser;
  return res.status(200).json(updatedUser);
});

// PATCH  /users/:id --- ACTUALIZAR PARCIALMENTE UN USUARIO

router.patch("/users/:id", (req, res) => {
  const body = req.body;
  const params = req.params;
  const id = Number(params.id);
  const userIndex = users.findIndex((user) => {
    return user.id === id;
  }); // el indice del item en el arreglo o un -1
  console.log(userIndex);
  if (userIndex === -1) {
    return res.status(404).json({ error: "El usuario no existe" });
  }
  const updatedUser = {
    ...users[userIndex],
    ...body,
  };
  users[userIndex] = updatedUser;
  return res.status(200).json(updatedUser);
});

// DELETE  /users/:id --- ACTUALIZAR PARCIALMENTE UN USUARIO

router.delete("/users/:id", (req, res) => {
  const params = req.params;
  const id = Number(params.id);
  const userIndex = users.findIndex((user) => {
    return user.id === id;
  }); // el indice del item en el arreglo o un -1
  if (userIndex === -1) {
    return res.status(404).json({ error: "El usuario no existe" });
  }
  users.splice(userIndex, 1);
  return res.status(204).json();
});

server.use(express.json());
server.use(router);

server.listen(3000, () => {
  console.log("server is listening");
});
