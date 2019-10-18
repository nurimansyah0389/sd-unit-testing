import './styles/main.css';

import FormRegister from './components/form-register';
import Heading from './components/heading';
import UserList, { addUser } from './components/user-list';
import Registration from './lib/registration';
import Users from './users.json';

const Main = (App) => {

    // Component
    const MainParent = document.createElement('div');
    const Hr = document.createElement('hr');
    const TopHeader = Heading();
    const Logo = document.createElement('div');
    const LogoImg = document.createElement('img');
    LogoImg.src = '/logo.png';
    Logo.classList.add('logo');
    Logo.appendChild(LogoImg);

    MainParent.classList.add('main');
    TopHeader.textContent = 'User Registration - Unit Testing';

    const BottomHeader = Heading();
    BottomHeader.textContent = 'User Lists';

    // Layout
    MainParent.appendChild(Logo);
    MainParent.appendChild(TopHeader);
    MainParent.appendChild(FormRegister);
    MainParent.appendChild(Hr);
    MainParent.appendChild(BottomHeader);
    MainParent.appendChild(UserList(Users));

    // Create Tree
    App.appendChild(MainParent);

    /**
     * Logic
     */
    const onHandleRegister = e => {
        e.preventDefault();
        const [$email, $password] = FormRegister.childNodes;
        const payload = {
            email: $email.value,
            password: $password.value
        };
        // Register
        const registration = new Registration(Users);
        if (registration.register(payload)) {
            // Append user
            addUser(payload);
            // Clear form
            $email.value = '';
            $password.value = '';
        }
    };
    FormRegister.addEventListener('submit', onHandleRegister);

};
export default Main;