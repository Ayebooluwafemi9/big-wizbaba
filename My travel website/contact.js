const form = document.getElementById('form');
const submit = document.getElementById('submit');
// prevent the form from submitting automatically
   form.onsubmit = function (event) {
    event.preventDefault();
// Display an alert once form is submitted
    alert("Form submitted successfully!");
// you can also access form data if needed
const formData = new formData (submit);
    console.log( "Name:", formData.get("fname"));
   }