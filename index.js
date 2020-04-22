const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
    };
   mongoose.connect(keys.mongoURI, options).then(()=>{
       console.log("Connected");
   }).catch((err)=>{
    console.log("Error",err);
    process.exit(1);
});


const app = express();

const authRoutes = require('./routes/authRoutes');
authRoutes(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);

