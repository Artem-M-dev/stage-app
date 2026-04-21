import './favorites.scss';

import { Component } from 'react';
import Winter from '../cards/Winter'
import Spring from '../cards/Spring'
import Summer from '../cards/Summer'
import Autumn from '../cards/Autumn'

class Favorites extends Component {
    state = {
        type: 'winter'
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

    render() {
        const {type} = this.state;

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

                {type === 'winter' ? <Winter/> : null}
                {type === 'spring' ? <Spring/> : null}
                {type === 'summer' ? <Summer/> : null}
                {type === 'autumn' ? <Autumn/> : null}
            </div>
        )
    }
}

export default Favorites;