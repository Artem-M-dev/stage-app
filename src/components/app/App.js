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

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        books: [],
        bonuses: 0,
        visits: 0,
    })

    const changeUserData = (data) => {
        setUserData(prev => ({
            ...prev,
            ...data
        }))
    }

    return (
        <div>
            <Header 
                changeUserData={changeUserData}/>
            <Welcome/>
            <Profile user={userData}/>
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

export default App;