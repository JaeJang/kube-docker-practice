
class Router {

    constructor(app) {
        this.app = app;
        this.setupRouter();
    }

    setupRouter() {
        const app = this.app;
        const db = app.get('db');

        app.get('/', (req, res) => {
            db.connect( err => {
                if (err) {
                    return res.status(503).json({
                        error: {
                            message: "Unable to get"
                        }
                    });
                }
            });
            db.query('SELECT * FROM Test', (error, results, fields) => {
                if (err) {
                    return res.status(503).json({
                        error: {
                            message: "Unable to get"
                        }
                    });
                }
                return res.status(200).json(results);
            });
            db.end();
        });

        app.post('/add', (req,res) => {
            if(req.body.newPost) {
                db.connect( err => {
                    if (err) {
                        return res.status(503).json({
                            error: {
                                message: "Unable to get"
                            }
                        });
                    }
                });
                db.query('INSERT INTO Test SET ?', req.body.newPost, (err, results) => {
                    if (err) {
                        return res.status(503).json({
                            error: {
                                message: "Unable to save"
                            }
                        });
                    }
                    return res.status(200).json(result);
                });
                db.end();
            }
        });
    }
}
export default Router;