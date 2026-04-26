import './register.scss';

import { useState } from 'react';

const Register = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {setModal, closeModal, changeUserData} = props;

    const registerHandler = (e, trigger) => {
        const value = e.target.value

        switch (trigger) {
            case "firstname":
                setFirstName(value)
                break;
            case "lastname":
                setLastName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
        }
    }

    const user = {
        firstName,
        lastName,
        email,
        password
    }

    return (
        <form onSubmit={(e) => changeUserData(e, user)} className="register">
            <h2 className="register__header">Register</h2>
            <div onClick={closeModal} className="register__close">
                <div className="register__close-top"></div>
                <div className="register__close-bottom"></div>
            </div>
            <div className="register__input">
                <h3>First name</h3>
                <input onChange={(e) => registerHandler(e, 'firstname')} type="text" />
            </div>
            <div className="register__input">
                <h3>Last name</h3>
                <input onChange={(e) => registerHandler(e, 'lastname')} type="text" />
            </div>
            <div className="register__input">
                <h3>E-mail</h3>
                <input onChange={(e) => registerHandler(e, 'email')} type="text" />
            </div>
            <div className="register__input">
                <h3>Password</h3>
                <input onChange={(e) => registerHandler(e, 'password')} type="text" />
            </div>
            <button type="submit" className="register__button">Sign Up</button>
            <p className="register__reg">Already have an account? <span onClick={() => setModal('login')}>Login</span></p>
        </form>
    )
}

export default Register;