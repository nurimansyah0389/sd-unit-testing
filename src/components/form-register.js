// Components
const Form = document.createElement('form');
const Input = document.createElement('input');
const Button = document.createElement('button');

// Set form field
const emailAddress = Input.cloneNode();
emailAddress.setAttribute('type', 'email');
emailAddress.setAttribute('placeholder', 'Email Address');
    
const password = Input.cloneNode();
password.setAttribute('type', 'password');
password.setAttribute('placeholder', 'Password');

const registerButton = Button.cloneNode();
registerButton.setAttribute('type', 'submit');
registerButton.textContent = 'Register New Customer';

// Form
const formRegister = Form.cloneNode();
formRegister.appendChild(emailAddress);
formRegister.appendChild(password);
formRegister.appendChild(registerButton);

export default formRegister;