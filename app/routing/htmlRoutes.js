function getRequest (app, path) {
app.get("/:route?", function(req, res){
    var route = req.params.route;
    switch(route){
        case "survey":
        res.sendFile(path.join(__dirname, "../public/survey.html"));
        break;

        default:
        res.sendFile(path.join(__dirname, "../public/home.html"));
        break;
    }
})
}

module.exports = getRequest