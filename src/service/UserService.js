import userRepository from "../repository/UserRepository.js"

class UserService {

    async getUsers() {
        
        try {

            const users = await userRepository.fetchUsers();
            return users;

        } catch (error) {

            console.error('Error fetching users:', error);

        }

    }

}

const userService = new UserService();
export default userService;