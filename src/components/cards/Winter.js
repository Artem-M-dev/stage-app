import winterBook1 from '../../images/favorites/FavoritesWinterBook1.png';
import winterBook2 from '../../images/favorites/FavoritesWinterBook2.png';
import winterBook3 from '../../images/favorites/FavoritesWinterBook3.png';
import winterBook4 from '../../images/favorites/FavoritesWinterBook4.png';

const Winter = () => {
    return (
        <div id="winter" className="favorites__books">
            <div className="favorites__book">
                <p className="favorites__book-type">Staff Picks</p>
                <h3 className="favorites__book-title">The Book Eaters <br />By Sunyi Dean</h3>
                <p className="favorites__book-description">An unusual sci-fi story about a book eater woman who tries desperately to save her dangerous mind-eater son from tradition and certain death. Complete with dysfunctional family values, light Sapphic romance, and a strong, complex protagonist. Not for the faint of heart.</p>
                <button className="favorites__book-buy">Buy</button>
                <img className="favorites__book-image" src={winterBook1} alt="book" />
            </div>
            <div className="favorites__book">
                <p className="favorites__book-type">Staff Picks</p>
                <h3 className="favorites__book-title">Cackle <br />By Rachel Harrison</h3>
                <p className="favorites__book-description">Are your Halloween movies of choice The Witches of Eastwick and Practical Magic? Look no further than here - where a woman recovering from a breakup moves to a quaint town in upstate New York and befriends a beautiful witch.</p>
                <button className="favorites__book-buy">Buy</button>
                <img className="favorites__book-image" src={winterBook2} alt="book" />
            </div>
            <div className="favorites__book">
                <p className="favorites__book-type">Staff Picks</p>
                <h3 className="favorites__book-title">Dante: Poet of the Secular World <br />By Erich Auerbach</h3>
                <p className="favorites__book-description">Auerbach's engaging book places the 'Comedy' within the tradition of epic, tragedy, and philosophy in general, arguing for Dante's uniqueness as one who raised the individual and his drama of soul into something of divine significance—an inspired introduction to Dante's main themes.</p>
                <button className="favorites__book-buy">Buy</button>
                <img className="favorites__book-image" src={winterBook3} alt="book" />
            </div>
            <div className="favorites__book">
                <p className="favorites__book-type">Staff Picks</p>
                <h3 className="favorites__book-title">The Last Queen <br />By Clive Irving</h3>
                <p className="favorites__book-description">A timely and revelatory new biography of Queen Elizabeth (and her family) exploring how the Windsors have evolved and thrived as the modern world has changed around them.</p>
                <button className="favorites__book-buy">Buy</button>
                <img className="favorites__book-image" src={winterBook4} alt="book" />
            </div>
        </div>
    )
}

export default Winter;