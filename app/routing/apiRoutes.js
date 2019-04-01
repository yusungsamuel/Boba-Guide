function postRequest(drinks,app,path) {
    app.post("/api/survey", function (req, res) {
        res.json(drinks)
        
    })
}

function apiGetRequest (app, drinks) {
    app.get("/api/bobalist", function(req, res){
        return res.json(drinks)
    })
    }

module.exports = {
    postRequest: postRequest,
    apiGetRequest: apiGetRequest
}