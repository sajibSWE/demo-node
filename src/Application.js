import express from "express";
import routing from "./route/Routing.js";
import { PORT, INITIAL_ROUTE } from "../resources/properties.js";

class Application {

  start() {

    const app = express();

    app.use(INITIAL_ROUTE, routing.getRouter());

    app.use((req, res, next) => {

      res.status(404).json({ message: "Not Found" });

    });

    // Listen for termination signals
    process.on("SIGINT", this.shutdown);
    process.on("SIGTERM", this.shutdown);

    // Start server
    const port = process.env.PORT || PORT;

    app.listen(PORT, () => {

      console.log(`Server running on port ${port}`);

    });

  }

  // Graceful shutdown function
  async shutdown() {

    try {

      await sequelize.close(); // Close Sequelize connection
      console.log("Database connection closed.");
      process.exit(0); // Exit the process

    } catch (error) {

      console.error("Error closing the database connection:", error);
      process.exit(1); // Exit with an error code

    }

  }

}

//start execution
const application = new Application();
application.start();
