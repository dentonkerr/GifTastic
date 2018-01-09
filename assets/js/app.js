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
        console.log(response)
      
      for (var i = 0; i < gifs.length; i++) {
        
        var image = $("<img>").attr("src", gifs[i].images.downsized.url);

        var rating = gifs[i].rating;
        console.log(rating);

        $("#gifs-here").append("Rating: " + rating);
        
        $("#gifs-here").append(image);

    }
})});

});




