import express from "express";
import routing from "./route/Routing.js";
import { PORT, CONTEXT_PATH } from "../resources/properties.js";
import GlobalErrorMiddleware from "./middleware/GlobalErrorMiddleware.js";
import CustomError from "./exception/CustomError.js";
import Swagger from "./config/Swagger.js";

class Application {

  start() {

    const app = express();

    app.use(CONTEXT_PATH, routing.getRouter());

    //adding global error handler
    app.use(GlobalErrorMiddleware.handleError);

    const swagger = new Swagger();

    swagger.setup(app);

    app.use((req, res, next) => {

      next(new CustomError(`Can't find ${req.originalUrl} on this server!`, 404));

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
