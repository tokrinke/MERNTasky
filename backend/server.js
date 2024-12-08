require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/tasks');

const app = express();

app.use(express.json());

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
});

app.use('/tasks',taskRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log('connected to database, listening to port', process.env.PORT);
        });
    })
    .catch((err)=>{
        console.log(err);
    })