import './profile.scss';

import book from '../../icons/profile/ProfileBook.svg';
import copy from '../../icons/profile/ProfileCopy.svg';
import star from '../../icons/profile/ProfileStar.svg';
import union from '../../icons/profile/ProfileUnion.svg';

import { Component } from 'react';

class Profile extends Component {
    render() {
        const {user, closeModal} = this.props

        return (
            <div className="profile">
                <div className="profile__name">
                    <div className="profile__name-short">
                        {user.firstName && user.lastName ? 
                        `${user.firstName.slice(0, 1)}${user.lastName.slice(0, 1)}` : ''}
                    </div>
                    <div className="profile__name-full">{user.firstName}</div>
                </div>
                <div className="profile__info">
                    <div onClick={closeModal} className="profile__close">
                        <div className="profile__close-top"></div>
                        <div className="profile__close-bottom"></div>
                    </div>
                    <h2 className="profile__head">My profile</h2>
                    <div className="profile__info-icons">
                        <div className="profile__info-icon">
                            <p className="info__icon-name">visits</p>
                            <img src={union} alt="" />
                            <p className="info__icon-count">{user.visites}</p>
                        </div>
                        <div className="profile__info-icon">
                            <p className="info__icon-name">bonuses</p>
                            <img src={star} alt="" />
                            <p className="info__icon-count">{user.bonuses}</p>
                        </div>
                        <div className="profile__info-icon">
                            <p className="info__icon-name">books</p>
                            <img src={book} alt="" />
                            <p className="info__icon-count">{user.books ? user.books.length : ''}</p>
                        </div>
                    </div>
                    <div className="profile__info-books">
                        <p>Rented books</p>
                        <ul>
                            {user.books && (
                                user.books.map(book => (
                                    <li>{book}</li>
                                ))
                            )}
                        </ul>
                    </div>
                    <div className="profile__info-number">
                        <p>Card number <span>{user.id}</span></p>
                        <img src={copy} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;