import './register.scss';

import { Component } from 'react';

class Register extends Component {
    // Собрать данные в объект с input'ов
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        errors: {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
        }
    }

    registerHandler = (e) => {
        const value = e.target.value;
        const typeField = e.target.getAttribute('data-field');

        switch (typeField) {
            case 'firstname':
                this.setState(({firstName}) => ({
                    firstName: value
                }))
                break;
            case 'lastname':
                this.setState(({lastName}) => ({
                    lastName: value
                }))
                break;
            case 'email':
                this.setState(({email}) => ({
                    email: value
                }))
                break;
            case 'password':
                this.setState(({password}) => ({
                    password: value
                }))
                break;
            default:
                return
        }

        const errorMessage = this.validation(typeField, value);
        console.log(`${typeField}: ${errorMessage}`);

        this.setState(({errors}) => ({
            errors: {
                ...errors,
                [typeField]: errorMessage
            }
        }))
    }

    validation = (type, value) => {
        switch (type) {
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
                if (!/[!@#$%]/.test(value)) return 'The password must contain special characters !@#$%';
                if (!/[A-Za-z]/.test(value)) return 'The password must contain letters...';
                if (!/[0-9]/.test(value)) return 'The password must contain numbers...';
                return '';
            default:
                return ''
        }
    }

    render() {
        const {closeModal, showModal, changeUserData} = this.props;
        const {firstname, lastname, email, password} = this.state.errors;
        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
        };

        return (
            <form onSubmit={(e) => changeUserData(e, user)} className="register">
                <h2 className="register__header">Register</h2>
                <div onClick={closeModal} className="register__close">
                    <div className="register__close-top"></div>
                    <div className="register__close-bottom"></div>
                </div>
                <div className="register__input">
                    <h3>First name</h3>
                    <input 
                        data-field="firstname"
                        onChange={(e) => this.registerHandler(e)} 
                        style={firstname ? {border: "1px solid red"} : null}
                        type="text"
                        required/>
                        {firstname && (
                            <div style={{color: 'red', fontSize: '10px'}}>
                                {firstname}
                            </div>
                        )}
                </div>
                <div className="register__input">
                    <h3>Last name</h3>
                    <input 
                    data-field="lastname"
                        onChange={(e) => this.registerHandler(e)} 
                        style={lastname ? {border: "1px solid red"} : null}
                        type="text"
                        required/>
                        {lastname && (
                            <div style={{color: 'red', fontSize: '10px'}}>
                                {lastname}
                            </div>
                        )}
                </div>
                <div className="register__input">
                    <h3>E-mail</h3>
                    <input 
                        data-field="email"
                        onChange={(e) => this.registerHandler(e)} 
                        style={email ? {border: "1px solid red"} : null}
                        type="text"
                        required/>
                        {email && (
                            <div style={{color: 'red', fontSize: '10px'}}>
                                {email}
                            </div>
                        )}
                </div>
                <div className="register__input">
                    <h3>Password</h3>
                    <input 
                        data-field="password"
                        onChange={(e) => this.registerHandler(e)} 
                        style={password ? {border: "1px solid red"} : null}
                        type="text"
                        required/>
                        {password && (
                            <div style={{color: 'red', fontSize: '10px'}}>
                                {password}
                            </div>
                        )}
                </div>
                <button type="submit" className="register__button">Sign Up</button>
                <p className="register__reg">Already have an account? <span onClick={() => showModal('login')}>Login</span></p>
            </form>
        )
    }
}

export default Register;