import './login.scss';

import { useState, useEffect } from 'react';

const Login = (props) => {
    const [users, setUsers] = useState([]);
    const [firstField, setFirstField] = useState('');
    const [secondField, setSecondField] = useState('');

    const {closeModal, setModal, changeUserData} = props;

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        try {
            const data = await fetch('http://localhost:3001/users');
            const res = await data.json();

            setUsers(res);

        } catch (err) {
            console.error(err);
            throw err
        }
    }

    const userSearch = (allUsers) => {
        const user = allUsers.find(user => 
            (firstField === user.email || firstField === user.id) && 
            (secondField === user.password)
        );

        if (user) {
            changeUserData(user)
        } else {
            console.log("Пользователь не найден...")
        }

    }

    const loginHandler = (e) => {
        const type = e.target.getAttribute('data-input');
        const value = e.target.value

        switch (type) {
            case "firstField":
                setFirstField(value);
                break;
            case "secondField":
                setSecondField(value);
                break;
            default:
                return
        }
    }

    const loginSubmit = (e) => {
        e.preventDefault();

        userSearch(users);

        setFirstField('');
        setSecondField('');
    } 

    return (
        <form onSubmit={(e) => loginSubmit(e)} className="login">
            <h2 className="login__header">Login</h2>
            <div onClick={closeModal} className="login__close">
                <div className="login__close-top"></div>
                <div className="login__close-bottom"></div>
            </div>
            <div className="login__input">
                <h3>E-mail or readers card</h3>
                <input 
                    onChange={(e) => loginHandler(e)}
                    data-input="firstField"
                    type="text"
                    value={firstField}
                    required />
            </div>
            <div className="login__input">
                <h3>Password</h3>
                <input 
                    onChange={(e) => loginHandler(e)}
                    data-input="secondField"
                    type="text"
                    value={secondField}
                    required />
            </div>
            <button type="submit" className="login__button">Log In</button>
            <p className="login__reg">Don’t have an account? <span onClick={() => setModal('register')}>Register</span></p>
        </form>
    )
}

export default Login;