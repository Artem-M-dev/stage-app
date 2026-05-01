import './digital.scss';
import { Component } from 'react';

class Digital extends Component {

    state = {
        users: [],
        name: '',
        number: ''
    }

    digitalHandler = (e, trigger) => {
        const value = e.target.value

        switch (trigger) {
            case 'name':
                this.setState(({name}) => ({
                    name: value
                }))
                break;
            case 'number':
                this.setState(({number}) => ({
                    number: value
                }))
                break;
            default:
                return
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

    foundUser = (users) => {
        const {name, number} = this.state

        const user = users.find(user => 
            (name === user.firstName && number === user.id)
        );

        if (user) {
            this.props.changeUserData(user)
        } else {
            console.log("Такой пользователь не найден...")
        }
    }

    digitalSubmit = (e) => {
        e.preventDefault();

        this.foundUser(this.state.users);

        this.setState(({name, number}) => ({
            name: '',
            number: ''
        }))
    }

    render() {
        const {name, number} = this.state

        return (
            <div className="digital">
                <h2 className="digital__title">Digital Library Cards</h2>
                <div className="digital__wrapper">
                    <form onSubmit={(e) => this.digitalSubmit(e)} className="digital__payment">
                        <h3 className="digital__payment-title">Find your Library card</h3>
                        <div className="digital__payment-window">
                            <div className="payment__form">
                                <p>Brooklyn Public Library</p>
                                <input 
                                    onChange={(e) => this.digitalHandler(e, 'name')}
                                    type="text" 
                                    placeholder="Reader's name"
                                    value={name}
                                    required/>
                                <input 
                                    onChange={(e) => this.digitalHandler(e, 'number')}
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
}

export default Digital;