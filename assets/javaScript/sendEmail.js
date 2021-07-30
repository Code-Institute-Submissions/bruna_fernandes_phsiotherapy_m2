function sendMail(contactForm) {
    emailjs.send("gmail", "michael", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "contact_details": contactForm.contactsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            $('#message-confirm').modal('show');
        },
        function(error) {
            $('#message-error').modal('show');
            console.log("FAILED", error);
        }
    );
    return false; //Blocks page from loading a new page
}

(function(){
    emailjs.init("user_GXGSp6FSJeA0qWq32yxe8");
    })();