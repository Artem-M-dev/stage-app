import './header.scss';
import Register from '../register/Register';
import Login from '../login/Login';
import Profile from '../profile/Profile';

import profile from '../../icons/header/HeaderProfile.svg';
import { useState } from 'react';

const Header = (props) => {
    const [show, setShow] = useState('icon');
    const [modal, setModal] = useState('');

    const {changeUserData, user} = props;

    const closeModal = () => {
        setShow('icon');
        setModal(null);
    }

    const showModal = (type) => {
        if (type === 'first' && (user.firstName && user.lastName)) {
            setModal('profile')
            console.log(modal);
        } else if (type === 'first') {
            setModal('login')
        }

        if (type === 'second' && (user.firstName && user.lastName)) {
            changeUserData({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                books: [],
                visites: 0,
                bonuses: 0,
            })
            setModal(null)
        } else if (type === 'second') {
            setModal('register')
        }
    }

    const log = modal === 'login' ? <Login 
                                        changeUserData={changeUserData}
                                        setModal={setModal} 
                                        closeModal={closeModal}/> : null;
    const register = modal === 'register' ? <Register 
                                                changeUserData={changeUserData}
                                                setModal={setModal} 
                                                closeModal={closeModal}/> : null;
    const profile = modal === 'profile'? <Profile
                                            user={user}
                                            closeModal={closeModal}/> : null
    const content = <View 
                        user={user}
                        setShow={setShow}
                        showModal={showModal}
                        show={show}/>

    return (
        <div> 
            {content}
            {log}
            {register}
            {profile}
        </div>
    )
}

const View = (props) => {
    const {show, setShow, showModal, user} = props;
    const {firstName, lastName} = user;

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
                            onClick={() => showModal('first')}
                            className="header__profile-log"
                            >{user.firstName && user.lastName ? 'My profile' : 'Log in'}</p>
                        <p  
                            onClick={() => showModal('second')}
                            className="header__profile-reg"
                            >{firstName && lastName ? 'Log Out' : 'Register'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;