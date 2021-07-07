function sendMail(contactForm) {
    emailjs.send("gmail", "bruna", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "contact_details": contactForm.contactsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false; //Blocks page from loading a new page
}