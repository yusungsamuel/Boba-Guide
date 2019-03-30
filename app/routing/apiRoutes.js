function postRequest(app,path) {
    app.post("/api/survey", function (req, res) {
        var surveyAnswer = req.body;
        // answer.push(surveyAnswer)
        res.json(surveyAnswer)
        
    })
}

module.exports = postRequest