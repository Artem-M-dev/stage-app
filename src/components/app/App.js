import '../../css/modern-normalize.min.css';

import Header from '../header/Header';
import Welcome from '../welcome/Welcome';
import About from '../about/About';
import Favorites from '../favorites/Favorites';
import Coffee from '../coffee/Coffee';
import Contacts from '../contacts/Contacts';
import Digital from '../digital/Digital';
import Footer from '../footer/Footer';
import Profile from '../profile/Profile';
import Buy from '../buy/Buy';

import { Component } from 'react';


class App extends Component {
    
    state = {
        userData: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            books: null,
            visites: null,
            bonuses: null,
        }
    }

    changeUserData = (data) => {    
        this.setState((prevState) => ({
            userData: {
                ...prevState.userData,
                ...data
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
                {/* <Profile user={this.state.userData}/> */}
                <About/>
                <Favorites/>
                <Buy/>
                <Coffee/>
                <Contacts/>
                <Digital/>
                <Footer/>
            </div>
        )
    }
}

export default App;