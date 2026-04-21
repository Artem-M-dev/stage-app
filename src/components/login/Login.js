import './login.scss';

import { Component } from 'react';

class Login extends Component {
    render() {
        const {closeModal, showModal} = this.props;

        return (
            <div className="login">
                <h2 className="login__header">Login</h2>
                <div onClick={closeModal} className="login__close">
                    <div className="login__close-top"></div>
                    <div className="login__close-bottom"></div>
                </div>
                <div className="login__input">
                    <h3>E-mail or readers card</h3>
                    <input type="text" />
                </div>
                <div className="login__input">
                    <h3>Password</h3>
                    <input type="text" />
                </div>
                <button className="login__button">Log In</button>
                <p className="login__reg">Don’t have an account? <span onClick={() => showModal('register')}>Register</span></p>
            </div>
        )
    }
}



export default Login;