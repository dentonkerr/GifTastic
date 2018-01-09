var topics = ["baseball", "football", "basketball", "soccer", "hockey", "tennis", "golf"]

function createButtons() {

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

    $("#topic-buttons").append("<button>" + topic + "</button>");

});

createButtons();







