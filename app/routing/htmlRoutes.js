app.get(route, function(req, res){
    switch(route){
        case "/survey":
        res.sendFile(path.join(__dirname, "survey.html"));
        break;
        
        default:
        res.sendFile(path.join(__dirname, "home.html"));
        break;
    }
})