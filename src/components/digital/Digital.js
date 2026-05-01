import './digital.scss';

import { useState, useEffect } from 'react';

const Digital = (props) => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const {changeUserData} = props

    useEffect(() => {
        getUsers();
    }, [])

    const digitalHandler = (e, trigger) => {
        const value = e.target.value;

        switch (trigger) {
            case "name":
                setName(value);
                break;
            case "number":
                setNumber(value);
                break;
            default:
                return;
        }
    }

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

    const foundUser = (users) => {
        const user = users.find(user => 
            (name === user.firstName && number === user.id)
        );

        if (user) {
            changeUserData(user)
        } else {
            console.log("Такой пользователь не найден...")
        }
    }

    const digitalSubmit = (e) => {
        e.preventDefault();

        foundUser(users);

        setName('');
        setNumber('');
    }

    return (
        <div className="digital">
            <h2 className="digital__title">Digital Library Cards</h2>
            <div className="digital__wrapper">
                <form onSubmit={(e) => digitalSubmit(e)} className="digital__payment">
                    <h3 className="digital__payment-title">Find your Library card</h3>
                    <div className="digital__payment-window">
                        <div className="payment__form">
                            <p>Brooklyn Public Library</p>
                            <input 
                                onChange={(e) => digitalHandler(e, 'name')}
                                type="text" 
                                placeholder="Reader's name"
                                value={name}
                                required/>
                            <input 
                                onChange={(e) => digitalHandler(e, 'number')}
                                type="text" 
                                placeholder="Card number"
                                value={number}
                                required/>
                        </div>
                        <button type="submit" className="payment__btn">Check the card</button>
                    </div>
                </form>
                <div className="digital__get">
                    <p className="digital__get-title">Get a reader card</p>
                    <p className="digital__get-description">You will be able to see a reader card after logging into account or you can register a new account</p>
                    <div className="digital__get-buttons">
                        <button>Sign Up</button>
                        <button>Log in</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Digital;