/**
 * Template Name: PhotoFolio - v1.1.1
 * Template URL: https://bootstrapmade.com/photofolio-bootstrap-photography-website-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
 const submitFormQuote = (name, email, subject, message) => {
    //  console.log(name);
    //  console.log(email);
    //  console.log(subject);
    //  console.log(message);

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
        .then(response => response.json())

        // Displaying results to console
        .then(json => console.log(json));

}

const validateInputQuote = (event) => {
    event.preventDefault();
    let elements = document.getElementsByClassName('form-control2');
    let submit = true;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const area = document.getElementById("address").value;
    const school = document.getElementById("school").value;
    const message = document.getElementById("quote-message").value;
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(school);
    console.log(area);
    console.log(message);


    for (let i = 0, im = elements.length; im > i; i++) {
        if (elements[i].value === "") {
            // document.getElementById("error").style.display = "block";
            elements[i].style.border = "1px solid red";
            submit = false;
        }
    }
    if (submit) {
        submitFormQuote(name, email, phone, school, message);
    }


} 