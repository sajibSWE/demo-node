import express from 'express';
import routes from './route/Routing.js';
import { PORT,INITIAL_ROUTE } from '../resources/properties.js';

class Application {

    static start() {

        const app = express();

        app.use(INITIAL_ROUTE, routes);

        app.use((req, res, next) => {
            res.status(404).json({ message: 'Not Found' });
        });

        // Start server
        const port = process.env.PORT || PORT;
        app.listen(PORT, () => {
            console.log(`Server running on port ${port}`);
        });

    }

}

//start execution 
Application.start();


