function postRequest(answer) {
    app.post("/survey", function (req, res) {
        var surveyAnswer = req.body;
        answer.push(surveyAnswer)
        res.sendFile(__dirname, "result.html")
    })
}