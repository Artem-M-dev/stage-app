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
            ...data,
            books: [...prev.books, ...data.books]
        }))
    }

    return (
        <div>
            <Header 
                user={userData}
                changeUserData={changeUserData}/>
            <Welcome/>
            <About/>
            <Favorites
                user={userData}
                changeUserData={changeUserData}/>
            <Coffee/>
            <Contacts/>
            {userData.firstName && userData.lastName
            ? <DigitalProfile user={userData}/>
            : <Digital changeUserData={changeUserData}/>}
            <Footer/>
        </div>
    )
}

export default App;