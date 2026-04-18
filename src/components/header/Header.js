import './header.scss';

import profile from '../../icons/header/HeaderProfile.svg';

const Header = () => {
    return (
        <div className="header">
            <h2 className="header__title">Brooklyn Public Library</h2>
            <div className="header__links">
                <a href="#">About</a>
                <a href="#">Favorites</a>
                <a href="#">Coffee shop</a>
                <a href="#">Contacts</a>
                <a href="#">Library Card</a>
                <img src={profile} alt="" />
            </div>
        </div>
    )
}

export default Header;