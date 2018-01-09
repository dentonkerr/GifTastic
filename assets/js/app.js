var topics = ["baseball", "football", "basketball", "soccer", "hockey", "tennis", "golf"]

function createButtons() {

    for (var i = 0; i < topics.length; i++) {
        
        var a = $("<button>");
        
        a.addClass("sports");
        
        a.attr("data-name", topics[i])
        
        a.text(topics[i]);
        
        $("#topic-buttons").append(a);
    }
}

createButtons();

