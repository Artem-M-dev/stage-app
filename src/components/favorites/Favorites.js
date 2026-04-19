import './favorites.scss';

import { useState } from 'react';
import Winter from '../cards/Winter';
import Spring from '../cards/Spring';
import Summer from '../cards/Summer';
import Autumn from '../cards/Autumn';


const Favorites = () => {
    const [type, setType] = useState('winter');

    const tabs = [
        {id: "winter", label: "Winter"},
        {id: "spring", label: "Spring"},
        {id: "summer", label: "Summer"},
        {id: "autumn", label: "Autumn"},
    ]

    const onChange = (tabType) => {
        setType(tabType)
    }

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
            {type === 'winter' ? <Winter/> : null}
            {type === 'spring' ? <Spring/> : null}
            {type === 'summer' ? <Summer/> : null}
            {type === 'autumn' ? <Autumn/> : null}
        </div>
    )
}

export default Favorites;