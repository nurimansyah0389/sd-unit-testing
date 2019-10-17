import './styles/main.css';

import FormRegister from './components/form-register';
import Heading from './components/heading';
import UserList from './components/user-list';

const Main = (App) => {

    // Component
    const MainParent = document.createElement('div');
    const Hr = document.createElement('hr');
    const TopHeader = Heading();

    MainParent.classList.add('main');
    TopHeader.textContent = 'User Registration - Unit Testing';

    const BottomHeader = Heading();
    BottomHeader.textContent = 'User Lists';

    // Layout
    MainParent.appendChild(TopHeader);
    MainParent.appendChild(FormRegister);
    MainParent.appendChild(Hr);
    MainParent.appendChild(BottomHeader);
    MainParent.appendChild(UserList());

    // Create Tree
    App.appendChild(MainParent);

};
export default Main;