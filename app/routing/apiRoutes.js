function postRequest(drinks,app,path) {
    app.post("/api/survey", function (req, res) {
        res.json(drinks)
        
    })
}

module.exports = postRequest