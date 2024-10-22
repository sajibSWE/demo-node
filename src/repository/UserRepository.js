import User from '../model/User.js';

class UserRepository {

    async fetchUsers() {
        
        try {

            const users = await User.findAll();
            return users;

        } catch (error) {

            console.error('Error fetching users:', error);

        }

    };

}

const userRepository = new UserRepository();
export default userRepository;
