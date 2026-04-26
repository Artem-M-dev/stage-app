import {useState, useEffect} from 'react'

const Summer = (props) => {

    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        fetchElements();
    }, [])

    const fetchElements = async () => {
        try {
            const res = await fetch('http://localhost:3001/books')
            const data = await res.json();
            
            setCards(data[0].summer)
            
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div id="winter" className="favorites__books">
            {
                cards.map(item => (
                    <div key={item.id} className="favorites__book">
                        <p className="favorites__book-type">{item.type}</p>
                        <h3 className="favorites__book-title">{item.title}<br />{item.author}</h3>
                        <p className="favorites__book-description">{item.description}</p>
                        <button className="favorites__book-buy">Buy</button>
                        <img className="favorites__book-image" src={item.image} alt="book" />
                    </div>
                ))
            }
        </div>
    )
}

export default Summer;