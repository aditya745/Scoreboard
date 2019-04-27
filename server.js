const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./Routes/api/items');

const app = express();

//Body parser middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(()=> console.log('MongoDb connected'))
    .catch(err => console.log(err));

//use routes
app.use('/api/items', items);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log('server started on port 5000'));