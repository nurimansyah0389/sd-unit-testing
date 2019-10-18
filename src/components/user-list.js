// Components
const Table = document.createElement('table');
const Body = document.createElement('tbody');
const Row = document.createElement('tr');
const ColHeader = document.createElement('th');
const Col = document.createElement('td');

export const addUser = user => {
    const $row = Row.cloneNode();
    const $email = Col.cloneNode();
    const $password = Col.cloneNode();
    $email.textContent = user.email;
    $password.textContent = user.password;

    $row.appendChild($email);
    $row.appendChild($password);
    Body.appendChild($row);
};

export default (payload = []) => {

    // Initial Data
    const data = payload.length > 0 ? payload : [
        {
            email: 'user.one@email.com',
            password: 'user.one.password'
        },
        {
            email: 'user.two@email.com',
            password: 'user.two.password'
        },
        {
            email: 'user.three@email.com',
            password: 'user.three.password'
        },
    ];

    // Generate Header
    const $headerEmail = ColHeader.cloneNode();
    const $headerPassword = ColHeader.cloneNode();
    $headerEmail.textContent = 'Email Address';
    $headerPassword.textContent = 'Password';
    const Header = Row.cloneNode();
    Header.appendChild($headerEmail);
    Header.appendChild($headerPassword);
    Body.appendChild(Header);

    // Generate user list
    data.forEach(row => {
        const $row = Row.cloneNode();
        const $email = Col.cloneNode();
        const $password = Col.cloneNode();
        $email.textContent = row.email;
        $password.textContent = row.password;

        $row.appendChild($email);
        $row.appendChild($password);
        Body.appendChild($row);
    });
    
    // Append
    Table.appendChild(Body);

    // Return
    return Table;

};