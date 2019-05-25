const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
var exphbs  = require('express-handlebars');

const app = express();

app.use( express.static('./src/public/') );

const hbs = exphbs.create({
    partialsDir: [
        'views/partials/',
        'views/layouts/'
    ]
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const appRoute = require('./src/routes/appRoute');
// const musicRoute = require('./src/routes/musicRoute');
// const userRoute = require('./src/routes/userRoute');
// const playRoute = require('./src/routes/playRoute');

dotenv.config();



app.use(bodyParser.json() );
app.use(bodyParser.urlencoded({extended:false}));

 app.use('/', appRoute);
// app.use('/music', musicRoute);
// app.use('/playlist', playRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Listening to port ${PORT}`);
});