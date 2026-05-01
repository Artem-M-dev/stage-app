import './header.scss';

import profile from '../../icons/header/HeaderProfile.svg';

import { Component } from 'react';
import Login from '../login/Login';
import Register from '../register/Register';
import Profile from '../profile/Profile';

class Header extends Component {

    state = {
        show: 'icon',
        modal: null,
    };

    onChange = (trigger) => {
        this.setState({
            show: trigger
        })
    };

    closeModal = () => {
        this.setState({
            show: 'icon',
            modal: null
        })
    }

    showModal = (type) => {
        if (type === 'first' && (this.props.user.firstName && this.props.user.lastName)) {
            this.setState(({modal}) => ({
                modal: 'profile'
            }))
        } else if (type === 'first') {
            this.setState(({modal}) => ({
                modal: 'login'
            }))
        }

        if (type === 'second' && (this.props.user.firstName && this.props.user.lastName)) {
            this.props.changeUserData({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                books: null,
                visites: null,
                bonuses: null,
            })
            this.setState(({modal}) => ({
                modal: null
            }))
        } else if (type === 'second') {
            this.setState(({modal}) => ({
                modal: 'register'
            }))
        }
    }

    render() {
        const {modal} = this.state;

        const log = modal === 'login' ? <Login 
                                            changeUserData={this.props.changeUserData}
                                            showModal={this.showModal} 
                                            closeModal={this.closeModal}/> : null;
        const register = modal === 'register' ? <Register
                                                    changeUserData={this.props.changeUserData}
                                                    showModal={this.showModal} 
                                                    closeModal={this.closeModal}/> : null;
        const profile = modal === 'profile' ? <Profile
                                                user={this.props.user}/> : null
        const content = <View 
                            user={this.props.user}
                            state={this.state} 
                            onChange={this.onChange}
                            showModal={this.showModal}/>

        return (
            <div>
                {content}
                {log}
                {register}
                {profile}
            </div>
        )
    }

}

class View extends Component {

    render() {
        const {onChange, showModal, state, user} = this.props;

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
                            style={state.show === 'icon' ? {display: 'block'} : {display: 'none'}}
                            onClick={() => {onChange('profile')}}
                            className="header__links-icon"
                            src={profile}
                            alt="" />
                        <div 
                            style={state.show === 'profile' ? {display: 'block'} : {display: 'none'}}
                            className="header__profile">
                            <p 
                                onClick={() => {onChange('icon')}} 
                                className="header__profile-head">
                                Profile</p>
                            <p 
                                className="header__profile-log"
                                onClick={() => showModal('first')}
                                >{user.firstName && user.lastName ? 'My profile' : 'Log in'}</p>
                            <p 
                                className="header__profile-reg"
                                onClick={() => showModal('second')}
                                >{user.firstName && user.lastName ? 'Log Out' : 'Register'}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;