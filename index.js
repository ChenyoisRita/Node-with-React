const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
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
});


const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());


const authRoutes = require('./routes/authRoutes');
authRoutes(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);

