import './favorites.scss';

import { Component } from 'react';

class Favorites extends Component {
    state = {
        type: 'winter',
        cards: {}
    }

    tabs = [
        {id: 'winter', label: 'Winter'},
        {id: 'spring', label: 'Spring'},
        {id: 'summer', label: 'Summer'},
        {id: 'autumn', label: 'Autumn'},
    ];

    onChange = (tabType) => {
        this.setState({
            type: tabType
        })
    }

    componentDidMount() {
        this.requireCards()
    }

    requireCards = async () => {
        try {
            const res = await fetch('http://localhost:3001/books')
            const data = await res.json();

            this.setState(({cards}) => ({
                cards: data[0]
            }))

        } catch (err) {
            console.error(err);
            throw err
        }
    }

    renderElements = (elements) => {
        if (!elements) return null;

        return elements.map(elem => (
            <div key={elem.id} className="favorites__book">
                <p className="favorites__book-type">{elem.type}</p>
                <h3 className="favorites__book-title">{elem.title} <br />{elem.author}</h3>
                <p className="favorites__book-description">{elem.description}</p>
                <button className="favorites__book-buy">Buy</button>
                <img src={elem.image} alt="book" className="favorites__book-image" />
            </div>
        ))
    }

    render() {
        const {type, cards} = this.state;
        const elements = this.renderElements(cards[type])

        return (
            <div className="favorites">
                <h2 className="favorites__title">Favorites</h2>
                <h3 className="favorites__subtitle">Pick favorites of season</h3>
                <div className="favorites__tabs">
                    {
                        this.tabs.map(tab => (
                            <div 
                                key={tab.id}
                                onClick={() => this.onChange(tab.id)}
                                className="favorites__tab">
                                <div 
                                    className={`tab__circle ${tab.id === this.state.type ? 'tab__circle-active' : ''}`}></div>
                                <p 
                                    className={`tab__title ${tab.id === this.state.type ? 'tab__title-active' : ''}`}>
                                        {tab.label}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="favorites__books">
                    {elements}
                </div>
            </div>
        )
    }
}

export default Favorites;