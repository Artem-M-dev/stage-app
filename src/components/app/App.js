import '../../css/modern-normalize.min.css';

import Header from '../header/Header';
import Welcome from '../welcome/Welcome';
import About from '../about/About';
import Favorites from '../favorites/Favorites';
import Coffee from '../coffee/Coffee';
import Contacts from '../contacts/Contacts';
import Digital from '../digital/Digital';
import Footer from '../footer/Footer';


const App = () => {
    return (
        <div>
            <Header/>
            <Welcome/>
            <About/>
            <Favorites/>
            <Coffee/>
            <Contacts/>
            <Digital/>
            <Footer/>
        </div>
    )
}

export default App;