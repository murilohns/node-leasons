const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("home/index");
});

app.get('/news_form', (req, res) => {
    res.render("admin/news_form");
});

app.get('/news', (req, res) => {
    res.render("noticias/news");
});

app.listen(3000, () => {
    console.log("Success")
});
