const users = [
  { id: 1, name: "Carlos", age: 22 }, //0
  { id: 2, name: "Carlos", age: 22 }, //1
];

const getAllUsers = (req, res) => {
  return res.status(200).json(users);
};

const getUserById = (req, res) => {
  const params = req.params;
  const id = Number(params.id);
  const findUser = users.find((user) => {
    return user.id === id;
  }); // un usuario o undefined
  if (findUser === undefined) {
    return res.status(404).json({ error: "El usuario no existe" });
  }
  return res.status(200).json(findUser);
};

const createUser = (req, res) => {
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
};

const updateUser = (req, res) => {
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
};

const updatePartialUser = (req, res) => {
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
};

const deleteUser = (req, res) => {
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
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  updatePartialUser,
  deleteUser,
};
