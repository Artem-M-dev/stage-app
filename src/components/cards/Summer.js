import { Component } from 'react';

class Summer extends Component {

    state = {
        cards: []
    }

    componentDidMount() {
        this.fetchElements();
    }

    fetchElements = async () => {
        try {
            const res = await fetch('http://localhost:3001/books');
            const data = await res.json();

            this.setState({
                cards: data[0].summer
            })

        } catch (err) {
            console.log(err);
        }
    }

    render() {
        const {cards} = this.state

        return (

            <div id="summer" className="favorites__books">
                {
                    cards.map(item => (
                        <div key={item.id} className="favorites__book">
                            <p className="favorites__book-type">{item.type}</p>
                            <h3 className="favorites__book-title">{item.title} <br />{item.author}</h3>
                            <p className="favorites__book-description">{item.description}</p>
                            <button className="favorites__book-buy">Buy</button>
                            <img src={item.image} alt="book" className="favorites__book-image" />
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Summer;