import Registration from '../lib/registration';
import Users from '../users.json';

describe('Registration Unit Test', () => {
    let jsDomAlert;

    // Mock Alert
    beforeEach(() => {
        jsDomAlert = window.alert;
        window.alert = jest.fn();
    });

    afterEach(() => {
        window.alert = jsDomAlert;
    });
    // == END OF MOCK

    it('Throw an error if payload is empty', () => {
        // Arrange
        const payload = {};
        const registration = new Registration();

        // Act
        const Action = () => registration.isEmptyPayload(payload);

        // Assert
        expect(Action).toThrow('EMPTY_PAYLOAD');
    });
    it('Throw an error if email is invalid', () => {
        // Arrange
        const email = 'invalid-email';
        const registration = new Registration();

        // Act
        const Action = () => registration.isEmailValid(email);

        // Assert
        expect(Action).toThrow('INVALID_EMAIL');
    });
    it('Throw an error if email exist', () => {
        // Arrange
        const email = 'user@tiket.com';
        const initialUsers = Users;
        const registration = new Registration(initialUsers);

        // Action
        const Action = () => registration.isEmailExist(email);

        // Assert
        expect(Action).toThrow('USER_EXIST');
    });
    it('Return success code if user has been registered successfully', () => {
        // Arrange
        const payload = {
            email: 'newuser@tiket.com',
            passord: 'P@SSw0RD'
        };
        const registration = new Registration(Users);

        // Action
        registration.register(payload);

        // Assert
        expect(registration.users).toContain(payload);
        
    });

});