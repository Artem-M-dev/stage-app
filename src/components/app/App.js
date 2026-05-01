import '../../css/modern-normalize.min.css';

import Header from '../header/Header';
import Welcome from '../welcome/Welcome';
import About from '../about/About';
import Favorites from '../favorites/Favorites';
import Coffee from '../coffee/Coffee';
import Contacts from '../contacts/Contacts';
import Digital from '../digital/Digital';
import DigitalProfile from '../digitalProfile/DigitalProfile';
import Footer from '../footer/Footer';
import Buy from '../buy/Buy';

import { Component } from 'react';


class App extends Component {
    
    state = {
        userData: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            books: [],
            visites: null,
            bonuses: null,
        }
    }

    changeUserData = (data) => {    
        this.setState((prevState) => ({
            userData: {
                ...prevState.userData,
                ...data,
                books: [...prevState.userData.books, ...data.books]
            }
        }), () => {
            console.log(this.state.userData);
        })
    }

    render() {
        return (
            <div>
                <Header
                    user={this.state.userData}
                    changeUserData={this.changeUserData}/>
                <Welcome/>
                <About/>
                <Favorites 
                    user={this.state.userData}
                    changeUserData={this.changeUserData}/>
                <Buy/>
                <Coffee/>
                <Contacts/>
                {this.state.userData.firstName && this.state.userData.lastName 
                ? <DigitalProfile user={this.state.userData}/> 
                : <Digital changeUserData={this.changeUserData}/>}
                <Footer/>
            </div>
        )
    }
}

export default App;