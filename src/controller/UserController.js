import userService from "../service/UserService.js";

class UserController {
  async getUsers(req, res) {
    try {
      const users = await userService.getUsers();

      res.status(201).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

const userController = new UserController();
export default userController;
