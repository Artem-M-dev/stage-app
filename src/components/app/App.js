import '../../css/modern-normalize.min.css';
import Header from '../header/Header';
import Welcome from '../welcome/Welcome';
import About from '../about/About';
import Favorites from '../favorites/Favorites';
import Coffee from '../coffee/Coffee';

const App = () => {
    return (
        <div>
            <Header/>
            <Welcome/>
            <About/>
            <Favorites/>
            <Coffee/>
        </div>
    )
}

export default App;