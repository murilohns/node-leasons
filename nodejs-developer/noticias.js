var http = require('http');

var server = http.createServer( function(req, res) {

    var category = req.url;
    var responseText = "";

    if(category == "/technology") {
        responseText = "Notícias de Tecnologia";
    }

    if(category == "/fashion") {
        responseText = "Notícias de Moda";
    }

    if(category == "/beauty") {
        responseText = "Notícias de beleza"
    }

    if(category == "/") {
        responseText = "Página de notícias"
    }

    res.end("<html><body>" + responseText + "</body></html>");
})

server.listen(3000);