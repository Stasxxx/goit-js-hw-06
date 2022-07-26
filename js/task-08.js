const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault()

    const elements = event.currentTarget.elements;
    const email = elements.email.value;
    const password = elements.password.value;

    // const {
    //     elements: { email, password }
    // } = event.currentTarget;

    if (password === "" || email === "") {
    return console.log("Alert!");
    };
    
    const formData = {
        email: email,
        password: password,
    }

    console.log(formData)
    event.currentTarget.reset();
}

