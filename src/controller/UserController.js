
class UserController {

    async getUser(req, res) {

        try {

            res.status(201).json({ msg: 'got user' });

        } catch (error) {

            res.status(500).json({ error: error.message });

        }

    }

}

// Export an instance of UserController
const userController = new UserController();
export default userController;

