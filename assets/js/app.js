$(document).ready(function() {

var topics = ["baseball", "football", "basketball", "soccer", "hockey", "tennis", "golf"]

function createButtons() {

    $("#topic-buttons").empty();

    for (var i = 0; i < topics.length; i++) {
        
        var a = $("<button>");
        
        a.addClass("sports");
        
        a.attr("data-name", topics[i])
        
        a.text(topics[i]);
        
        $("#topic-buttons").append(a);
    };
};

$("#add-sport").on("click", function(event) {

    event.preventDefault();

    var topic = $("#sport-input").val().trim();

    topics.push(topic);

    createButtons();

});

createButtons();

$(document).on("click", ".sports", function() {

    $("#gifs-here").empty();

    var clickedBtn = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + clickedBtn + "&api_key=OQsUJXjxQqapDlxqn92Zbiv5jzfHI9z2&limit=10";

    $.ajax({
        
        url: queryURL,
        
        method: "GET"
      
    })
      
      .done(function(response) {
      
        var gifs = response.data;
        //console.log(gifs)
      
      for (var i = 0; i < gifs.length; i++) {
        
        var img = $("<img>")

        var image = $("<img>").attr("src", gifs[i].images.downsized.url);
        
        var imageStill = $("<img>").attr("src", still);
        console.log(imageStill);
        
        //get the still from response
        var still = gifs[i].images.downsized_still.url;
        console.log(still);
        
        //get animate from response
        var animate = gifs[i].images.downsized.url;
        console.log(animate);

        var rating = $("<p>").text("Rating: " + gifs[i].rating);
        console.log(rating);

        $("#gifs-here").append(rating);
        
        $("#gifs-here").append(imageStill);

    }

    // gifs pause and play on click

    // //$(".sports").on("click", function() {
    // $(document).on("click", ".sports", function() {
        

    //     var state = $(this).attr("data-state");
    //     console.log(state)
    // });

})});

});




