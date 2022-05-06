import express from "express";
import clc from "cli-color";
import morgan from "morgan";
import { UserController } from "./router";

async function boostrap() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/user", UserController);

  app.use(morgan("combined"));
  app.listen(3000);
}

boostrap().then(() => {
  console.log(clc.green("Connection to database established"));
  console.log(clc.green("Server is listening on port 3000"));
});
