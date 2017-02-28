var SearchTerm

$("#submit").click(function() {
    searchTerm = $("#memes").val();
    
    $.getJSON(
        
        "https://api.giphy.com/v1/gifs/search?q=" + SearchTerm + "&api_key=dc6zaTOxFJmzC",
        
       function(response) {
        console.log(response);
        $("#results").append("<img src=" + "https://api.giphy.com/v1/gifs/search?q=" + SearchTerm + "&api_key=dc6zaTOxFJmzC");
      }
)});