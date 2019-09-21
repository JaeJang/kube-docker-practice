import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import Router from './router';

const PORT = 3001;
const app = express();
app.server = http.createServer(app);

new Router(app);

app.server.listen(process.env.PORT || PORT, () => {
    console.log("connected on port 3001");
});

