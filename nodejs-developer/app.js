app = require('./config/server');

const newsRoutes = require('./app/routes/news')(app);
const homeRoutes = require('./app/routes/home')(app);
const newsFormRoutes = require('./app/routes/news_form')(app);


app.listen(3000, () => {
    console.log("Listening on port 3000")
});
