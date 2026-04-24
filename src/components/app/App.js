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
    render() {
        return (
            <div>
                <Header/>
                <Welcome/>
                {/* <Profile/> */}
                <About/>
                <Favorites/>
                {/* <Buy/> */}
                <Coffee/>
                <Contacts/>
                <Digital/>
                <Footer/>
            </div>
        )
    }
}

export default App;