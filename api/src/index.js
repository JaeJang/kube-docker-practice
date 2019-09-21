import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import mysql from 'mysql';

import Router from './router';
import key from './keys'; 

const PORT = 3001;
const app = express();
app.server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());
app.use(cors());
new Router(app);

const db = mysql.createConnection({
    host: key.host,
    use: key.user,
    password: key.pword,
    database: key.database
});

app.set('db', db);


app.server.listen(process.env.PORT || PORT, () => {
    console.log("connected on port 3001");
});

