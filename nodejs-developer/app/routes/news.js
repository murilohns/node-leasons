module.exports = (app) => {
    app.get('/news', (req, res) => {
        res.render("noticias/news");
    });
}
