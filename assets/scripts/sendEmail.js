function sendMail(contactform){
    emailjs.send("service_vdfvl0e", "tribal_minds", {
        "from_name": contactform.name.value,
        "from_email": contactform.email.value,
        "feedback_summary": contactform.message.value
    })
    .then(function(response){
        console.log("SUCCESS", response);
    },
    function(error){
        console.log("FAILED", error);
    })
    contactform.name.value = "";
    contactform.email.value = "";
    contactform.message.value = "";
    return false
}