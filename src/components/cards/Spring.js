import springBook1 from '../../images/favorites/FavoritesSpringBook1.png';
import springBook2 from '../../images/favorites/FavoritesSpringBook2.png';
import springBook3 from '../../images/favorites/FavoritesSpringBook3.png';
import springBook4 from '../../images/favorites/FavoritesSpringBook4.png';

import { Component } from 'react';

class Spring extends Component {
    render() {
        return (
            <div id="spring" className="favorites__books">
                <div className="favorites__book">
                    <p className="favorites__book-type">Staff Picks</p>
                    <h3 className="favorites__book-title">The Body <br />By Stephen King</h3>
                    <p className="favorites__book-description">Powerful novel that takes you back to a nostalgic time, exploring both the beauty and danger and loss of innocence that is youth.</p>
                    <button className="favorites__book-buy">Buy</button>
                    <img src={springBook1} alt="book" className="favorites__book-image" />
                </div>
                <div className="favorites__book">
                    <p className="favorites__book-type">Staff Picks</p>
                    <h3 className="favorites__book-title">Carry: A Memoir of Survival on Stolen Land <br />By Toni Jenson</h3>
                    <p className="favorites__book-description">This memoir about the author's relationship with gun violence feels both expansive and intimate, resulting in a lyrical indictment of the way things are.</p>
                    <button className="favorites__book-buy">Buy</button>
                    <img src={springBook2} alt="book" className="favorites__book-image" />
                </div>
                <div className="favorites__book">
                    <p className="favorites__book-type">Staff Picks</p>
                    <h3 className="favorites__book-title">Days of Distraction <br />By Alexandra Chang</h3>
                    <p className="favorites__book-description">A sardonic view of Silicon Valley culture, a meditation on race, and a journal of displacement and belonging, all in one form-defying package of spare prose.</p>
                    <button className="favorites__book-buy">Buy</button>
                    <img src={springBook3} alt="book" className="favorites__book-image" />
                </div>
                <div className="favorites__book">
                    <p className="favorites__book-type">Staff Picks</p>
                    <h3 className="favorites__book-title">Dominicana <br />By Angie Cruz</h3>
                    <p className="favorites__book-description">A fascinating story of a teenage girl who marries a man twice her age with the promise to bring her to America. Her marriage is an opportunity for her family to eventually immigrate. For fans of Isabel Allende and Julia Alvarez.</p>
                    <button className="favorites__book-buy">Buy</button>
                    <img src={springBook4} alt="book" className="favorites__book-image" />
                </div>
            </div>
        )
    }
}

export default Spring;