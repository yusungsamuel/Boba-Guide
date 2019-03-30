var sum = data.milk + data.tea + data.cheese + data.sweet + data.topping + data.fruit

if (sum === ""){
    var newP = $("<p>").text("We found you a glass of water.")
    var newImg = $("<img>").attr("src", "https://cdn.images.express.co.uk/img/dynamic/11/590x/Water-600992.jpg")
    $("#modal").append(newP, newImg)
}