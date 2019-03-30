$("#submit").on("click", function(event){
    event.preventDefault();
    var answers = {
        milk: $("#q1").val(),
        tea: $("#q2").val(),
        cheese: $("#q3").val(),
        sweet: $("#q4").val(),
        fruit: $("#q5").val(),
        topping: $("#q6").val()
    };
    
})