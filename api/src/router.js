
class Router {

    constructor(app) {
        this.app = app;
        this.setupRouter();
    }

    setupRouter() {
        const app = this.app;

        app.get('/', (req, res) => {
            return res.status(200).json("Hello world");
        });
    }
}

export default Router;