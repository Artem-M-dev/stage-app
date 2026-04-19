import './about.scss';

import sliderImg1 from '../../images/about/AboutImg1.png';
import sliderImg2 from '../../images/about/AboutImg2.png';
import sliderImg3 from '../../images/about/AboutImg3.png';
import sliderImg4 from '../../images/about/AboutImg4.png';
import sliderImg5 from '../../images/about/AboutImg5.png';

import { Component } from 'react';

class About extends Component {

    state = {
        index: 0,
        offset: 0
    };

    onChange = (index) => {
        this.setState({
            index,
            offset: 551 * index
        })
    };

    render() {
        const {offset} = this.state;

        const styles = {
            transform: `translateX(-${offset}px)`,
            transition: `all 0.6s ease-in-out`
        };

        return (
            <div className="about">
                <h2 className="about__title">About</h2>
                <p className="about__description">The Brooklyn Library is a free workspace, a large number of books and a cozy coffee shop inside </p>
                <div className="about__images-wrapper">
                    <div style={styles} className="about__images">
                        <img src={sliderImg1} alt="slider image" className="about__img" />
                        <img src={sliderImg2} alt="slider image" className="about__img" />
                        <img src={sliderImg3} alt="slider image" className="about__img" />
                        <img src={sliderImg4} alt="slider image" className="about__img" />
                        <img src={sliderImg5} alt="slider image" className="about__img" />
                    </div>
                </div>
                <div className="about__pagination">
                    <div 
                        onClick={() => this.onChange(0)}
                        id="0"
                        className={`pagination__point ${this.state.index === 0 ? 'pagination__point-active' : null}`}
                        ></div>
                    <div 
                        onClick={() => this.onChange(1)}
                        id="1"
                        className={`pagination__point ${this.state.index === 1 ? 'pagination__point-active' : null}`}
                        ></div>
                    <div 
                        onClick={() => this.onChange(2)}
                        id="2"
                        className={`pagination__point ${this.state.index === 2 ? 'pagination__point-active' : null}`}
                        ></div>
                </div>
            </div>
        )
    }
}

export default About;