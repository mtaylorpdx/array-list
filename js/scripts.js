var flavors = ["chocolate", "vanilla", "strawberry", "cookies n cream"];

$(document).ready(function() {
    flavors.forEach(function(flavor) {
        $(".flavorList").append("<li>"+flavor+"</li>");
    })
});