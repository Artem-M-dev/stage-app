import './register.scss';

import { Component } from 'react';

class Register extends Component {
    // Собрать данные в объект с input'ов
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    registerHandler = (e, trigger) => {
        const value = e.target.value;

        switch (trigger) {
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

        }
    }

    render() {
        const {closeModal, showModal, changeUserData} = this.props;
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
                        onChange={(e) => this.registerHandler(e, 'firstname')} 
                        type="text"
                        required/>
                </div>
                <div className="register__input">
                    <h3>Last name</h3>
                    <input 
                        onChange={(e) => this.registerHandler(e, 'lastname')} 
                        type="text"
                        required/>
                </div>
                <div className="register__input">
                    <h3>E-mail</h3>
                    <input 
                        onChange={(e) => this.registerHandler(e, 'email')} 
                        type="text"
                        required/>
                </div>
                <div className="register__input">
                    <h3>Password</h3>
                    <input 
                        onChange={(e) => this.registerHandler(e, 'password')} 
                        type="text"
                        required/>
                </div>
                <button type="submit" className="register__button">Sign Up</button>
                <p className="register__reg">Already have an account? <span onClick={() => showModal('login')}>Login</span></p>
            </form>
        )
    }
}

export default Register;