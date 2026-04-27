import './register.scss';

import { useState } from 'react';
// import validator from 'validator';

const Register = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    });

    const {setModal, closeModal, changeUserData} = props;

    const registerHandler = (e) => {
        const value = e.target.value
        const typeField = e.target.getAttribute('data-field')

        switch (typeField) {
            case "firstname":
                setFirstName(value);
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
            default:
                return
        }

        const errorMessage = validation(typeField, value);
        console.log(`${typeField}: ${errorMessage}`);

        setErrors(prev => ({
            ...prev,
            [typeField]: errorMessage
        }))

    }

    const user = {
        firstName,
        lastName,
        email,
        password
    };

    const validation = (name, value) => {
        switch (name) {
            case "firstname":
            case "lastname":
                if (/[^a-zA-Z]/.test(value)) return 'This field should consist only of letters!'
                if (value.length < 2) return 'This field must be longer than 2 characters...';
                if (value.length > 25) return 'This field is too long';
                return '';
            case "email":
                if (!/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/.test(value)) return 'Invalid Email...'
                return '';
            case "password":
                if (value.length < 8) return 'The password must be longer than 8 characters...';
                // Проверка на спец. символы
                if (!/[!@#$%]/.test(value)) return 'The password must contain special characters !@#$%';
                // Проверка на англ буквы
                if (!/[A-Za-z]/.test(value)) return 'The password must contain letters...';
                // Проверка на цифры
                if (!/[0-9]/.test(value)) return 'The password must contain numbers...';
                return '';
            default:
                return '';
        }
    }

    const postUser = async (user) => {
        try {
            const response = await fetch('http://localhost:3001/users', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(user)
            })

            if (!response.ok) {
                throw new Error('Failed to send data...');
            }

            console.log(user);

        } catch (err) {
            console.error(err)
            throw err
        }
    }

    const handlerSubmit = async (e) => {
        e.preventDefault();

        await postUser(user);
        changeUserData(user);

        setErrors({
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        });

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    }

    return (
        <form onSubmit={(e) => handlerSubmit(e)} className="register">
            <h2 className="register__header">Register</h2>
            <div onClick={closeModal} className="register__close">
                <div className="register__close-top"></div>
                <div className="register__close-bottom"></div>
            </div>
            <div className="register__input">
                <h3>First name</h3>
                <input 
                    required 
                    data-field="firstname"
                    value={firstName}
                    onChange={(e) => registerHandler(e)} 
                    style={errors.firstname ? {border: '1px solid red'} : null}
                    type="text" />
                    {errors.firstname && (
                        <div style={{color: 'red', fontSize: '10px'}}>
                            {errors.firstname}
                        </div>
                    )}
            </div>
            <div className="register__input">
                <h3>Last name</h3>
                <input 
                    required 
                    data-field="lastname"
                    value={lastName}
                    onChange={(e) => registerHandler(e)} 
                    style={errors.lastname ? {border: '1px solid red'} : null}
                    type="text" />
                    {errors.lastname && (
                        <div style={{color: 'red', fontSize: '10px'}}>
                            {errors.lastname}
                        </div>
                    )}
            </div>
            <div className="register__input">
                <h3>E-mail</h3>
                <input 
                    required 
                    data-field="email"
                    value={email}
                    onChange={(e) => registerHandler(e)} 
                    style={errors.email ? {border: '1px solid red'} : null}
                    type="text" />
                    {errors.email && (
                        <div style={{color: 'red', fontSize: '10px'}}>
                            {errors.email}
                        </div>
                    )}
            </div>
            <div className="register__input">
                <h3>Password</h3>
                <input 
                    required 
                    data-field="password"
                    value={password}
                    onChange={(e) => registerHandler(e)} 
                    style={errors.password ? {border: '1px solid red'} : null}
                    type="text" />
                    {errors.password && (
                        <div style={{color: 'red', fontSize: '10px'}}>
                            {errors.password}
                        </div>
                    )}
            </div>
            <button type="submit" className="register__button">Sign Up</button>
            <p className="register__reg">Already have an account? <span onClick={() => setModal('login')}>Login</span></p>
        </form>
    )
}

export default Register;