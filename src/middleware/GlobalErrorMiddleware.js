

class GlobalErrorMiddleware {

    static handleError(err, req, res, next) {

        // Set default values for the error
        err.statusCode = err.statusCode || 500;
        err.status = err.status || 'error';

        if (process.env.NODE_ENV === 'development') {

            // Detailed error for development
            res.status(err.statusCode).json({

                status: err.status,
                message: err.message,
                error: err,
                stack: err.stack,

            });

        } else if (process.env.NODE_ENV === 'production') {

            // Simplified error for production
            if (err.isOperational) {

                // Known operational error
                res.status(err.statusCode).json({

                    status: err.status,
                    message: err.message,

                });

            } else {

                // Programming or unknown error
                console.error('ERROR 💥:', err);
                res.status(500).json({

                    status: 'error',
                    message: 'Something went very wrong!',

                });

            }

        }

    }

}

export default GlobalErrorMiddleware;
