import '../../css/modern-normalize.min.css';

import Header from '../header/Header';
import Welcome from '../welcome/Welcome';
import About from '../about/About';
import Favorites from '../favorites/Favorites';
import Coffee from '../coffee/Coffee';
import Contacts from '../contacts/Contacts';


const App = () => {
    return (
        <div>
            <Header/>
            <Welcome/>
            <About/>
            <Favorites/>
            <Coffee/>
            <Contacts/>
        </div>
    )
}

export default App;