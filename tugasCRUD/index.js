const express = require ('express');
const mongoose = require ('mongoose');
const app = express();
const bodyParser = require ('express');
app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/crud')
const db = mongoose.connection;

const port = 8080;
const apiRouter = require("./api-routes");

app.get('/',(req,res) => {
    res.send('The server is running..')
});

app.use ("/api" , apiRouter)

app.listen (port, () => {
    console.log(`server running in port ${port}`);
});