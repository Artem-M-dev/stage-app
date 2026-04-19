import summerBook1 from '../../images/favorites/FavoritesSummerBook1.png';
import summerBook2 from '../../images/favorites/FavoritesSummerBook2.png';
import summerBook3 from '../../images/favorites/FavoritesSummerBook3.png';
import summerBook4 from '../../images/favorites/FavoritesSummerBook4.png';

const Summer = () => {
    return (
        <div id="summer" className="favorites__books">
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
    )
}

export default Summer;