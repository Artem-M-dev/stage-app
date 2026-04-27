import './favorites.scss';

import { useState } from 'react';
import { useEffect } from 'react';

const Favorites = () => {
    const [type, setType] = useState('winter');
    const [cards, setCards] = useState({});

    const tabs = [
        {id: "winter", label: "Winter"},
        {id: "spring", label: "Spring"},
        {id: "summer", label: "Summer"},
        {id: "autumn", label: "Autumn"},
    ]

    const onChange = (tabType) => {
        setType(tabType)
    }

    useEffect(() => {
        requireCards();
    }, [])

    const requireCards = async () => {
        try {
            const res = await fetch('http://localhost:3001/books');
            const data = await res.json();

            setCards(data[0]);
        } catch (err) {
            console.error(err);
            throw err
        }
    };

    const renderElements = (elements) => {
        if (!elements) return null

        return elements.map(elem => (
            <div key={elem.id} className="favorites__book">
                <p className="favorites__book-type">{elem.type}</p>
                <h3 className="favorites__book-title">{elem.title}<br />{elem.author}</h3>
                <p className="favorites__book-description">{elem.description}</p>
                <button className="favorites__book-buy">Buy</button>
                <img className="favorites__book-image" src={elem.image} alt="book" />
            </div>
        ))
    }

    const elements = renderElements(cards[type])

    return (
        <div className="favorites">
            <h2 className="favorites__title">Favorites</h2>
            <h3 className="favorites__subtitle">Pick favorites of season</h3>
            <div className="favorites__tabs">
                {
                    tabs.map(tab => {
                        return (
                            <div 
                                key={tab.id} 
                                onClick={() => onChange(tab.id)} 
                                className="favorites__tab"
                            >
                                <div className={`tab__circle ${type === tab.id ? 'tab__circle-active' : null}`}></div>
                                <p className={`tab__title ${type === tab.id ? 'tab__title-active' : null}`}>
                                    {tab.label}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="favorites__books">
                {elements}
            </div>
        </div>
    )
}

export default Favorites;