import './profile.scss';

import book from '../../icons/profile/ProfileBook.svg';
import copy from '../../icons/profile/ProfileCopy.svg';
import star from '../../icons/profile/ProfileStar.svg';
import union from '../../icons/profile/ProfileUnion.svg';


const Profile = (props) => {
    const {user, closeModal} = props;
    const {firstName, lastName, id, books, bonuses, visits} = user

    return (
        <div className="profile">
            <div className="profile__name">
                <div className="profile__name-short">
                    {firstName && lastName ? 
                    `${firstName.slice(0, 1)}${lastName.slice(0, 1)}` : ''}
                </div>
                <div className="profile__name-full">{firstName}</div>
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
                        <p className="info__icon-count">{visits}</p>
                    </div>
                    <div className="profile__info-icon">
                        <p className="info__icon-name">bonuses</p>
                        <img src={star} alt="" />
                        <p className="info__icon-count">{bonuses}</p>
                    </div>
                    <div className="profile__info-icon">
                        <p className="info__icon-name">books</p>
                        <img src={book} alt="" />
                        <p className="info__icon-count">{books.length}</p>
                    </div>
                </div>
                <div className="profile__info-books">
                    <p>Rented books</p>
                    <ul>
                        {
                            books.map(book => (
                                <li>{book}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="profile__info-number">
                    <p>Card number <span>{id}</span></p>
                    <img src={copy} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Profile;