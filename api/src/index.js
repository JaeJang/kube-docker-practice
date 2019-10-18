import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import mysql from 'mysql';

import Router from './router';
import key from './keys'; 

const PORT = 5000;
const app = express();
app.server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: key.host,
    user: key.user,
    password: key.pword,
    database: key.database
});

app.set('db', db);

new Router(app);

app.server.listen(PORT, () => {
    console.log("connected on port " + PORT);
});

