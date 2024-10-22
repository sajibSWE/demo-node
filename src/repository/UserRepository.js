import User from "../model/User.js";

class UserRepository {
  async fetchUsers() {
    try {
      //const users = await User.findAll();

      let sql = "SELECT * FROM public.users";
      const queryType = {
        type: sequelize.QueryTypes.SELECT, // Specify that this is a SELECT query
      };
      const [users, metadata] = await sequelize.query(sql, queryType);
      console.log(metadata);
      return users;
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
}

const userRepository = new UserRepository();
export default userRepository;

// const [users, metadata] = await sequelize.query(
//     "SELECT * FROM public.users u WHERE u.id = :id OR u.age > :age",
//     {
//         replacements: { id: 1, age: 18 }, // Use parameter replacements
//         type: sequelize.QueryTypes.SELECT // Specify that this is a SELECT query
//     }
// );
