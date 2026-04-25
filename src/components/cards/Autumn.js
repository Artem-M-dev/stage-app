import autumnBook1 from '../../images/favorites/FavoritesAutumnBook1.png';
import autumnBook2 from '../../images/favorites/FavoritesAutumnBook2.png';
import autumnBook3 from '../../images/favorites/FavoritesAutumnBook3.png';
import autumnBook4 from '../../images/favorites/FavoritesAutumnBook4.png';

import { Component } from 'react';

class Autumn extends Component {
    render() {
        return (
            <div id="autumn" className="favorites__books">
                <div className="favorites__book">
                    <p className="favorites__book-type">Staff Picks</p>
                    <h3 className="favorites__book-title">Casual Conversation <br />By Renia White</h3>
                    <p className="favorites__book-description">White's impressive debut collection takes readers through and beyond the concepts of conversation and the casual - both what we say to each other and what we don't, examining the possibilities around how we construct and communicate identity. </p>
                    <button className="favorites__book-buy">Buy</button>
                    <img src={autumnBook1} alt="book" className="favorites__book-image" />
                </div>
                <div className="favorites__book">
                    <p className="favorites__book-type">Staff Picks</p>
                    <h3 className="favorites__book-title">The Great Fire <br />By Lou Ureneck</h3>
                    <p className="favorites__book-description">The harrowing story of an ordinary American and a principled Naval officer who, horrified by the burning of Smyrna, led an extraordinary rescue effort that saved a quarter of a million refugees from the Armenian Genocide</p>
                    <button className="favorites__book-buy">Buy</button>
                    <img src={autumnBook2} alt="book" className="favorites__book-image" />
                </div>
                <div className="favorites__book">
                    <p className="favorites__book-type">Staff Picks</p>
                    <h3 className="favorites__book-title">Rickey: The Life and Legend <br />By Howard Bryant</h3>
                    <p className="favorites__book-description">With the fall rolling around, one can't help but think of baseball's postseason coming up! And what better way to prepare for it than reading the biography of one of the game's all-time greatest performers, the Man of Steal, Rickey Henderson?</p>
                    <button className="favorites__book-buy">Buy</button>
                    <img src={autumnBook3} alt="book" className="favorites__book-image" />
                </div>
                <div className="favorites__book">
                    <p className="favorites__book-type">Staff Picks</p>
                    <h3 className="favorites__book-title">Slug: And Other Stories <br />By Megan Milks</h3>
                    <p className="favorites__book-description">Exes Tegan and Sara find themselves chained together by hairballs of codependency. A father and child experience the shared trauma of giving birth to gods from their wounds.</p>
                    <button className="favorites__book-buy">Buy</button>
                    <img src={autumnBook4} alt="book" className="favorites__book-image" />
                </div>
            </div>
        )
    }
}

export default Autumn;