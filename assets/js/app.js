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
        
        var rating = $("<p>").text("Rating: " + gifs[i].rating);

        $("#gifs-here").append(rating);

        var img = $("<img>");

        img.addClass("gifs");
        img.attr("src", gifs[i].images.downsized_still.url);
        img.attr("data-animate", gifs[i].images.downsized.url);
        img.attr("data-still", gifs[i].images.downsized_still.url);
        img.attr("state", "still");
        $("#gifs-here").append(img);

    };

    $(".gifs").on("click", function() {
            
        var state = $(this).attr("state");
        console.log(state);
    
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("state", "animate");
        } 
        
        else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("state", "still");
        }});

})});

});