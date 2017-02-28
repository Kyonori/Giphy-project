var SearchTerm


    //        $(this).val()
//    });

//$("#submit").click(function() {
  $("#memes").keypress(function(){
    SearchTerm = $("#memes").val();
    
         $("#results").html("");
         
        
    
    $.getJSON(
        
        "https://api.giphy.com/v1/gifs/search?q=" + SearchTerm + "&api_key=dc6zaTOxFJmzC",
        
       function(response) {
        console.log(response);
        for(var i=0; 1<26; i++){
        $("#results").append("<img src='"+response.data[i].images.original.url+"'/>");
        }
      }
      
    
)});

