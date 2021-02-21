import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import dotenv from 'dotenv';

dotenv.config( {path: 'variables.env'} );

db.authenticate()
    .then( ()=> console.log('DB Connected') )
    .catch( error => console.log(error) );

const app = express();

app.set('view engine','pug');

const port = process.env.PORT || 4000;
const host = process.env.HOST || '0.0.0.0';


app.use( (req,res,next) => {
    const year = new Date();
    res.locals.currentYear = year.getFullYear();
    res.locals.sitesName = 'Travel Agency';
    next();
});

app.use( express.urlencoded( {extended: true} ) );

app.use( express.static('public') );

app.use('/', router);

app.listen(port,host, ()=>{console.log(`Server online at: ${host}/${port}`)} );