document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
    const result = document.getElementById('result');

    // load saved data from local storage if it exists
    const savedUserData = JSQN.parse(localStorage.getItem('userData'));
            if(savedUserData) {
                displayUserData(savedUserData);
            }
            // listen for form submission
    form.addEventListener('submit', function (event) {
        // prevent form from submitting
        event.preventDefault(); 
        // collect user input data
        const userData = {
            email: document.getElementById('email').Value,
            password: document.getElementById('pwd').Value
        };

        // save data to local storage
        localStorage.setItem('userData', JSQN.stringify(userData));
        // Display the user data
        displayUserData(userData);
    });

    // Function to display user data
    function displayUserData(userData)
    {
        result.innerHTML = `
        <h2> Saved Infomation </h2>
        <p><strong>Email:</strong> ${userData.email}</p>       
        <p><strong>Password:</strong> ${userData.pwd}</p>  
        `;
    }

});
