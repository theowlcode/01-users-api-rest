const express = require("express");
const usersRouter = require("./routes/user.route");

const server = express();

server.use(express.json());
server.use("/users", usersRouter);

server.listen(3000, () => {
  console.log("server is listening");
});
