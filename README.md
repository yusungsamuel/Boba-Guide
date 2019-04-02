# Boba-Guide
![boba guide](preview.png "Preview")
## Description 
Boba Guide is a full stack web application that matches users with a boba drink based on a survey that they fill out. The survey contains questions that asks user to rate some boba tea elements on a scale from 1-5. Drink with the closest matching score will be respond as a drink suggestion to the user. Users then can use the Yelp button on the nav bar to be redirected to Yelp so they can look up nearby boba stores. Finally, if the users are interested in all the boba options we have to suggest, they can click on the API BobaList button to get the array of boba drinks JSON.

## Deployment
Click [Here](https://boba-guide.herokuapp.com/) to be redirected

## Technologies Used
+ Javascript
+ jQuery- JavaScript library designed to simplify HTML DOM tree traversal
+ HTML
+ CSS
+ Bootstrap- Front-end web framework
+ Node.js - JavaScript run-time environment
+ Express - web application framework for Node.js
    * Used for defining route path

## Code Snippet 
The codes below is an example of defining route path for a GET request using Express. If user hit the route of /survey, the survey html file will be issue as a response so that the user can fill out the survey. The question mark in the path indicate that the route parameter is optional. Thus, when the user just hit the root route (/), the home page will be display. A switch statement is being used so that one GET function can define multiple path dynamically. 

```
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
```