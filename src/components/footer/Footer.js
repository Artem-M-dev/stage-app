import './footer.scss';

import twitter from '../../icons/footer/FooterTwitter.svg';
import instagram from '../../icons/footer/FooterInstagram.svg';
import facebook from '../../icons/footer/FooterFacebook.svg';

import { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer__top">
                    <div>
                        <p className="footer__top-address">286 Cadman Plaza, New York, <br /> NY 11238, United States</p>
                        <div className="footer__top-icons">
                            <a href="#"><img src={twitter} alt="twitter" /></a>
                            <a href="#"><img src={instagram} alt="instagram" /></a>
                            <a href="#"><img src={facebook} alt="facebook" /></a>
                        </div>
                    </div>
                    <div className="footer__top-work">
                        <p>Mon - Fri <br />08:00 am - 07:00 pm</p>
                        <p>Sat - Sun <br />10:00 am - 06:00 pm</p>
                    </div>
                </div>
                <hr />
                <div className="footer__bottom">
                    <p>2023</p>
                    <p>The Rolling Scopes School</p>
                    <p>Username</p>
                </div>
            </div>
        )
    }
}

export default Footer;