import './digitalProfile.scss';


import book from '../../icons/profile/ProfileBook.svg';
import star from '../../icons/profile/ProfileStar.svg';
import union from '../../icons/profile/ProfileUnion.svg';

const DigitalProfile = (props) => {
    const {user} = props;
    const {firstName, lastName, id, visits, bonuses, books} = user

    return (
        <div className="digitalProfile">
            <h2 className="digitalProfile__title">Digital Library Cards</h2>
            <div className="digitalProfile__wrapper">
                <form className="digitalProfile__payment">
                    <h3 className="digitalProfile__payment-title">Your Library card</h3>
                    <div className="digitalProfile__payment-window">
                        <div className="payment__info">
                            <p>Brooklyn Public Library</p>
                            <div>{`${firstName} ${lastName}`}</div>
                            <div>{id}</div>
                        </div>
                        <div className="digitalProfile__info-icons">
                            <div className="digitalProfile__info-icon">
                                <p className="info__icon-name">visits</p>
                                <img src={union} alt="" />
                                <p className="info__icon-count">{visits}</p>
                            </div>
                            <div className="digitalProfile__info-icon">
                                <p className="info__icon-name">bonuses</p>
                                <img src={star} alt="" />
                                <p className="info__icon-count">{bonuses}</p>
                            </div>
                            <div className="digitalProfile__info-icon">
                                <p className="info__icon-name">books</p>
                                <img src={book} alt="" />
                                <p className="info__icon-count">{books ? books.length : ''}</p>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="digitalProfile__get">
                    <p className="digitalProfile__get-title">Visit your profile</p>
                    <p className="digitalProfile__get-description">With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.</p>
                    <button>Profile</button>
                </div>
            </div>
        </div>
    )
}

export default DigitalProfile;