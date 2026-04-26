import './header.scss';
import Register from '../register/Register';
import Login from '../login/Login';

import profile from '../../icons/header/HeaderProfile.svg';
import { useState } from 'react';

const Header = (props) => {
    const [show, setShow] = useState('icon');
    const [modal, setModal] = useState(null);

    const {changeUserData} = props;

    const closeModal = () => {
        setShow('icon');
        setModal(null);
    }

    const log = modal === 'login' ? <Login setModal={setModal} closeModal={closeModal}/> : null;
    const register = modal === 'register' ? <Register 
                                                changeUserData={changeUserData}
                                                setModal={setModal} 
                                                closeModal={closeModal}/> : null;
    const content = <View 
                        setModal={setModal} 
                        setShow={setShow} 
                        show={show}/>

    return (
        <div> 
            {content}
            {log}
            {register}
        </div>
    )
}

const View = (props) => {
    const {show, setShow, setModal} = props;

    return (
        <div className="header">
            <h2 className="header__title">Brooklyn Public Library</h2>
            <div className="header__links">
                <a href="#">About</a>
                <a href="#">Favorites</a>
                <a href="#">Coffee shop</a>
                <a href="#">Contacts</a>
                <a href="#">Library Card</a>
                <div className="header__registration">
                    <img
                        onClick={() => setShow('profile')}
                        style={show === 'icon' ? {display: 'block'} : {display: 'none'}}
                        src={profile} alt="" />
                    <div
                        style={show === 'profile' ? {display: 'block'} : {display: 'none'}}
                        className="header__profile">
                        <p 
                            onClick={() => setShow('icon')}
                            className="header__profile-head">Profile</p>
                        <p  
                            onClick={() => setModal('login')}
                            className="header__profile-log">Log In</p>
                        <p  
                            onClick={() => setModal('register')}
                            className="header__profile-reg">Register</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;