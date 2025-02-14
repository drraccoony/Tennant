//Require all node modules
const path = require('path');
const routes = require('./controllers/');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({})

//Middleware setup
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//Start server
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    })
