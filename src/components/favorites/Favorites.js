import './favorites.scss';

import winterBook1 from '../../images/favorites/FavoritesWinterBook1.png';
import winterBook2 from '../../images/favorites/FavoritesWinterBook2.png';
import winterBook3 from '../../images/favorites/FavoritesWinterBook3.png';
import winterBook4 from '../../images/favorites/FavoritesWinterBook4.png';

import springBook1 from '../../images/favorites/FavoritesSpringBook1.png';
import springBook2 from '../../images/favorites/FavoritesSpringBook2.png';
import springBook3 from '../../images/favorites/FavoritesSpringBook3.png';
import springBook4 from '../../images/favorites/FavoritesSpringBook4.png';

import summerBook1 from '../../images/favorites/FavoritesSummerBook1.png';
import summerBook2 from '../../images/favorites/FavoritesSummerBook2.png';
import summerBook3 from '../../images/favorites/FavoritesSummerBook3.png';
import summerBook4 from '../../images/favorites/FavoritesSummerBook4.png';

import autumnBook1 from '../../images/favorites/FavoritesAutumnBook1.png';
import autumnBook2 from '../../images/favorites/FavoritesAutumnBook2.png';
import autumnBook3 from '../../images/favorites/FavoritesAutumnBook3.png';
import autumnBook4 from '../../images/favorites/FavoritesAutumnBook4.png';


const Favorites = () => {
    return (
        <div className="favorites">
            <h2 className="favorites__title">Favorites</h2>
            <h3 className="favorites__subtitle">Pick favorites of season</h3>
            <div className="favorites__tabs">
                <div className="favorites__tab">
                    <div className="tab__circle tab__circle-active"></div>
                    <p className="tab__title tab__title-active">Winter</p>
                </div>
                <div className="favorites__tab">
                    <div className="tab__circle"></div>
                    <p className="tab__title">Spring</p>
                </div>
                <div className="favorites__tab">
                    <div className="tab__circle"></div>
                    <p className="tab__title">Summer</p>
                </div>
                <div className="favorites__tab">
                    <div className="tab__circle"></div>
                    <p className="tab__title">Autumn</p>
                </div>
            </div>

            <div className="favorites__books favorites__books-winter">
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

            <div className="favorites__books favorites__books-spring">
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

            <div className="favorites__books favorites__books-summer">
                <div className="favorites__book">
                    <p className="favorites__book-type">Staff Picks</p>
                    <h3 className="favorites__book-title">Crude: A Memoir <br />By Pablo Fajardo & Sophie Tardy-Joubert</h3>
                    <p className="favorites__book-description">Drawing and color by Damien Roudeau | This book illustrates the struggles of a group of indigenous Ecuadoreans as they try to sue the ChevronTexaco company for damage their oil fields did to the Amazon and her people</p>
                    <button className="favorites__book-buy">Buy</button>
                    <img src={summerBook1} alt="book" className="favorites__book-image" />
                </div>
                <div className="favorites__book">
                    <p className="favorites__book-type">Staff Picks</p>
                    <h3 className="favorites__book-title">Let My People Go Surfing <br />By Yvon Chouinard</h3>
                    <p className="favorites__book-description">Chouinard—climber, businessman, environmentalist—shares tales of courage and persistence from his experience of founding and leading Patagonia, Inc. Full title: Let My People Go Surfing: The Education of a Reluctant Businessman, Including 10 More Years of Business Unusual.</p>
                    <button className="favorites__book-buy">Buy</button>
                    <img src={summerBook2} alt="book" className="favorites__book-image" />
                </div>
                <div className="favorites__book">
                    <p className="favorites__book-type">Staff Picks</p>
                    <h3 className="favorites__book-title">The Octopus Museum: Poems <br />By Brenda Shaughnessy</h3>
                    <p className="favorites__book-description">This collection of bold and scathingly beautiful feminist poems imagines what comes after our current age of environmental destruction, racism, sexism, and divisive politics.</p>
                    <button className="favorites__book-buy">Buy</button>
                    <img src={summerBook3} alt="book" className="favorites__book-image" />
                </div>
                <div className="favorites__book">
                    <p className="favorites__book-type">Staff Picks</p>
                    <h3 className="favorites__book-title">Shark Dialogues: A Novel <br />By Kiana Davenport</h3>
                    <p className="favorites__book-description">An epic saga of seven generations of one family encompasses the tumultuous history of Hawaii as a Hawaiian woman gathers her four granddaughters together in an erotic tale of villains and dreamers, queens and revolutionaries, lepers and healers.</p>
                    <button className="favorites__book-buy">Buy</button>
                    <img src={summerBook4} alt="book" className="favorites__book-image" />
                </div>
            </div>

            <div className="favorites__books favorites__books-autumn">
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
        </div>
    )
}

export default Favorites;