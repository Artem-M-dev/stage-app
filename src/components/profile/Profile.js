import './profile.scss';

import book from '../../icons/profile/ProfileBook.svg';
import copy from '../../icons/profile/ProfileCopy.svg';
import star from '../../icons/profile/ProfileStar.svg';
import union from '../../icons/profile/ProfileUnion.svg';

import { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <div className="profile__name">
                    <div className="profile__name-short">JD</div>
                    <div className="profile__name-full">John Doe</div>
                </div>
                <div className="profile__info">
                    <div className="profile__close">
                        <div className="profile__close-top"></div>
                        <div className="profile__close-bottom"></div>
                    </div>
                    <h2 className="profile__head">My profile</h2>
                    <div className="profile__info-icons">
                        <div className="profile__info-icon">
                            <p className="info__icon-name">visits</p>
                            <img src={union} alt="" />
                            <p className="info__icon-count">23</p>
                        </div>
                        <div className="profile__info-icon">
                            <p className="info__icon-name">bonuses</p>
                            <img src={star} alt="" />
                            <p className="info__icon-count">1240</p>
                        </div>
                        <div className="profile__info-icon">
                            <p className="info__icon-name">books</p>
                            <img src={book} alt="" />
                            <p className="info__icon-count">2</p>
                        </div>
                    </div>
                    <div className="profile__info-books">
                        <p>Rented books</p>
                        <ul>
                            <li>The Last Queen, Clive Irving</li>
                            <li>Dominicana, Angie Cruz</li>
                        </ul>
                    </div>
                    <div className="profile__info-number">
                        <p>Card number <span>F00234030</span></p>
                        <img src={copy} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;