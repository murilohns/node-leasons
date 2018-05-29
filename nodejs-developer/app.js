const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("<html><body>Portal de noticias</body></html>");
});

app.get('/technology', (req, res) => {
    res.send("<html><body>Notícias de tecnologia</body></html>");
});

app.get('/fashion', (req, res) => {
    res.send("<html><body>Notícias de Moda</body></html>");
});


app.get('/beauty', (req, res) => {
    res.send("<html><body>Notícias de beleza</body></html>");
});

app.listen(3000, () => {
    console.log("Success")
});
