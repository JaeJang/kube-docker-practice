
class Router {

    constructor(app) {
        this.app = app;
        this.setupRouter();
    }

    setupRouter() {
        const app = this.app;
        const db = app.get('db');

        app.get('/', (req, res) => {
            db.query('SELECT * FROM Test', (error, results, fields) => {
                if (error) {
                    return res.status(503).json({
                        error: {
                            message: "Unable to get",
                            error: error
                        }
                    });
                }
                res.status(200).json(results);
            });
            
        });

        app.post('/add', (req,res) => {
            if(req.body.newPost) {
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
            }
        });
    }
}
export default Router;