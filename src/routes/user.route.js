const express = require("express");
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  updatePartialUser,
  deleteUser,
} = require("../controllers/users.controller");

const router = express.Router();

// CRUD - CREA - LEER - ACTUALIZAR - ELIMINAR

// GET /users --- TODOS LOS USUARIOS
router.get("/", getAllUsers);

// GET /users/:id --- OBTENER UN USUARIO MEDIANTE UN PARÁMETRO DINÁMICO
router.get("/:id", getUserById);

// POST /users --- CREA UN NUEVO USUARIO

router.post("/", createUser);

// PUT /users/:id --- ACTUALIZAR TOTALMENTE UN USUARIO

router.put("/:id", updateUser);

// PATCH  /users/:id --- ACTUALIZAR PARCIALMENTE UN USUARIO

router.patch("/:id", updatePartialUser);

// DELETE  /users/:id --- ACTUALIZAR PARCIALMENTE UN USUARIO

router.delete("/:id", deleteUser);

module.exports = router;
