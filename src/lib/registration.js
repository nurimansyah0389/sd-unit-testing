class Registration {

    constructor(users = [])
    {
        this.users = users;
    }

    /**
     * Is empty payload function to check if the payload is empty
     * @params {Object} payload The payload
     * @params {String} payload.email Email address payload
     * @params {String} payload.password Password payload
     * @returns {Boolean}
     */
    isEmptyPayload = payload => {
        // Check
        if (!payload.email && !payload.password) throw new Error('EMPTY_PAYLOAD');

        // Return
        return true;
    };

    /**
     * Is email valid
     * @params {String} email Email Address
     * @returns {Boolean}
     */
    isEmailValid = email => {
        // Email pattern
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!pattern.test(email)) throw new Error('INVALID_EMAIL');

        // Return
        return true;
    };

    /**
     * Is email exist
     * @params {String} email Email Address
     * @returns {Boolean}
     */
    isEmailExist = email => {
        if (this.users.find(user => user.email === email)) throw new Error('USER_EXIST');

        // Return
        return true;
    };

    /**
     * Register
     * @params {Object} payload The payload
     * @params {String} payload.email Email address
     * @params {String} payload.password Password
     * @returns {Boolean}
     */
    register = payload => {
        try {
            this.isEmptyPayload(payload);
            this.isEmailValid(payload.email);
            this.isEmailExist(payload.email);

            // Save user
            this.users.push(payload);

            // Alert
            alert('User Created!');
            
            // Return
            return true;
        } catch (e) {
            let message = '';
            switch (e.message) {
                case 'EMPTY_PAYLOAD': message = 'Email and/or Password cannot empty!'; break;
                case 'INVALID_EMAIL': message = 'You have entered invalid email address!'; break;
                case 'USER_EXIST': message = 'The user is exist! Pick a new email!'; break;
                default: message = 'General Error';
            }
            alert(message);
        }
    };

};
export default Registration;