const express = require('express');
const mongoose = require('mongoose');

const router = require('./Router/index');

const app = express();

const port = 4567;
const hostname = 'localhost';

const localDB = 'mongodb://127.0.0.1:27017/zomato_27';
// const serverDB = 'mongodb+srv://z_db_27:GWSqi0X6EviTzxM0@cluster0.zcikl.mongodb.net/TestDB?retryWrites=true&w=majority';

app.use('/', router);

mongoose.connect(localDB)
    .then(res => {
        app.listen(port, hostname, () => {
            console.log(`Server is running at ${hostname}:${port}`);
        })
    })
    .catch(err => console.log(err));