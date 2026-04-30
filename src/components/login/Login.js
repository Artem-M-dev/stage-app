import './login.scss';

import { Component } from 'react';

class Login extends Component {

    state = {
        users: [],
        data: {
            firstField: null,
            secondField: null
        }
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {
        try {
            const data = await fetch('http://localhost:3001/users');
            const res = await data.json();

            this.setState(({users}) => ({
                users: res
            }))

        } catch (err) {
            console.error(err);
            throw err
        }
    }

    loginHandler = (e) => {
        const type = e.target.getAttribute('data-input');
        const value = e.target.value;

        switch (type) {
            case "firstfield":
                this.setState(({data}) => ({
                    data: {
                        ...data,
                        firstField: value
                    }
                }))
                break;
            case "secondfield":
                this.setState(({data}) => ({
                    data: {
                        ...data,
                        secondField: value
                    }
                }))
                break;
            default:
                return
        }
    }
    
    userSearch = (allUsers) => {
        const {firstField, secondField} = this.state.data;

        const user = allUsers.find(user => 
            (firstField === user.email || firstField === user.id) && 
            (secondField === user.password)
        );

        if (user) {
            this.props.changeUserData(user);
        } else {
            console.log("Пользователь не найден...")
        };

    }

    loginSubmit = (e, allUsers) => {
        e.preventDefault();

        this.userSearch(allUsers);

        this.setState(({data}) => ({
            data: {
                firstField: '',
                secondField: '',
            }
        }))
    }

    render() {
        const {closeModal, showModal} = this.props;
        const {users, data} = this.state

        return (
            <form onSubmit={(e) => this.loginSubmit(e, users)} className="login">
                <h2 className="login__header">Login</h2>
                <div onClick={closeModal} className="login__close">
                    <div className="login__close-top"></div>
                    <div className="login__close-bottom"></div>
                </div>
                <div className="login__input">
                    <h3>E-mail or readers card</h3>
                    <input 
                        onChange={(e) => this.loginHandler(e)}
                        data-input="firstfield" 
                        value={data.firstField}
                        type="text"
                        required />
                </div>
                <div className="login__input">
                    <h3>Password</h3>
                    <input 
                        onChange={(e) => this.loginHandler(e)}
                        data-input="secondfield" 
                        value={data.secondField}
                        type="text"
                        required />
                </div>
                <button type="submit" className="login__button">Log In</button>
                <p className="login__reg">Don’t have an account? <span onClick={() => showModal('register')}>Register</span></p>
            </form>
        )
    }
}



export default Login;