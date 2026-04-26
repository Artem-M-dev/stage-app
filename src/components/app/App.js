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

import { useState } from 'react';

const App = () => {
    
    let userData = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        id: Math.floor(Math.random() * 100000000)
    };

    const changeUserData = (e, data) => {
        e.preventDefault();

        userData = {
            ...userData,
            ...data,
            id: Math.floor(Math.random() * 100000000)
        };

        console.log(userData);
    }

    return (
        <div>
            <Header changeUserData={changeUserData}/>
            <Welcome/>
            <About/>
            <Favorites/>
            {/* <Buy/> */}
            <Coffee/>
            <Contacts/>
            <Digital/>
            {/* <Profile/> */}
            <Footer/>
        </div>
    )
}

export default App;