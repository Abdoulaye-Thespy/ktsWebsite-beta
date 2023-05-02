/**
 * Template Name: PhotoFolio - v1.1.1
 * Template URL: https://bootstrapmade.com/photofolio-bootstrap-photography-website-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
 const submitForm = (name, email, subject, message) => {

    // POST request using fetch()
    fetch("https://18bsbinhgi.execute-api.us-east-1.amazonaws.com/develop/", {

            // Adding method type
            method: "POST",
            mode: 'no-cors',

            // Adding body or contents to send
            body: JSON.stringify({
                name: name,
                email: email,
                subject: subject,
                message: message,
            }),
        })

        // Converting to JSON
        .then(response => { 
            response.json();
            document.getElementById("sent").style.display="block";
        })

        // Displaying results to console
        .then(json => console.log(json));

}

const validateinputs = (event) => {
    event.preventDefault();
    let elements = document.getElementsByClassName('form-control2');
    let submit = true;
    const name = document.getElementById("subject1").value;
    const email = document.getElementById("subject2").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
  




    for (let i = 0, im = elements.length; im > i; i++) {
        if (elements[i].value === "") {
            // document.getElementById("error").style.display = "block";
            elements[i].style.border = "1px solid red";
            submit = false;
        }
    }
    if (submit) {
        submitForm(name, email, subject, message);
    }


} 