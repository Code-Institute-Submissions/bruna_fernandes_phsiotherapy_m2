$(function() {
    //This function will execute as soon as page loads
        // It will grab the HTML element with the ID tag of "visible" and when
        // it is clicked it will execute another function and inside that function
        // it will grab the HTML element with ID tag of "invisible"
	$("#visible").click(function() {
         //This will be our toggle a class on and off which will be "show"
	    $('#invisible').toggleClass("show");
	  });  
	});


    $(function() {
        //This function will execute as soon as page loads
            // It will grab the HTML element with the ID tag of "visible" and when
            // it is clicked it will execute another function and inside that function
            // it will grab the HTML element with ID tag of "invisible"
        $("#visible2").click(function() {
             //This will be our toggle a class on and off which will be "show"
            $('#invisible2').toggleClass("show");
          });  
        });

        

        