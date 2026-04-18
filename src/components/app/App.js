import '../../css/modern-normalize.min.css';
import Header from '../header/Header';
import Welcome from '../welcome/Welcome';
import About from '../about/About';

const App = () => {
    return (
        <div>
            <Header/>
            <Welcome/>
            <About/>
        </div>
    )
}

export default App;