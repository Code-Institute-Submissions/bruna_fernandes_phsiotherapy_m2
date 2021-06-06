var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = "Good evening and welcome to Bruna Fernandes Fisioterpia";
 } else if (hourNow > 12) {
            greeting = "Good afternoon! Welcome to Bruna Fernandes Fisioterpia";
 } else if (hourNow > 0)  {
            greeting = "Good morning and welcome to Bruna Fernandes Fisioterpia";
 } else {
            greeting = "Welcome to Bruna Fernandes Fisioterpia";
 }
    document.write('<h3>' + greeting +'</h3>');
