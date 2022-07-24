const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault()

    const elements = event.currentTarget.elements;
    const email = elements.email.value;
    const password = elements.email.value;

    if (email === "" || password === "") {
    return console.log("Please fill in all the fields!");
    }
    
    const formData = {
        email: email,
        password: password,
    }

    console.log(formData)
    event.currentTarget.reset();
}

