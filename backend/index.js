const connection = require('./db-config');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
connection.connect((err) => {
    if (err) {
        console.error('error connecting: ' + err.stack);
    } else {
        console.log('connected to database with threadId :  ' + connection.threadId);
    }
});

app.use(express.json());

app.get("", (req, res) => {

    connection.query()
})

app.post("", (req, res) => {

    connection.query()
})

app.put("", (req, res) => {

    connection.query()
})

app.delete("", (req, res) => {

    connection.query()
})