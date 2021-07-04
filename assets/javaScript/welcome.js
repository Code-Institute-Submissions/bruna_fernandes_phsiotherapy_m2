var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = "Good Evening And Welcome To Bruna Fernandes Fisioterpia";
 } else if (hourNow > 12) {
            greeting = "Good Afternoon! Welcome To Bruna Fernandes Fisioterpia";
 } else if (hourNow > 0)  {
            greeting = "Good Morning And Welcome To Bruna Fernandes Fisioterpia";
 } else {
            greeting = "Welcome To Bruna Fernandes Fisioterpia";
 }
    document.write('<h3>' + greeting +'</h3>');
