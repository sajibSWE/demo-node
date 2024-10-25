import express from "express";

import userController from "../controller/UserController.js";

class Routing {

  constructor() {

    this.router = express.Router();

    this.router.post("/users", userController.createUser);

      /**
       * @swagger
       * /users:
       *   get:
       *     summary: Retrieve a list of users
       *     responses:
       *       200:
       *         description: A list of users
       */
    this.router.get("/users", userController.getUsers);

    this.router.get("/", (req, res) => {

      res.send("Hello, ES6 in Node.js!");

    });

  }

  getRouter() {

    return this.router;

  }

}

// Export an instance of Routing
const routing = new Routing();
export default routing;
