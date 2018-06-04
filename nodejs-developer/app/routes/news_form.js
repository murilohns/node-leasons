module.exports = (app) => {
    app.get('/news_form', (req, res) => {
        res.render("admin/news_form");
    });
}