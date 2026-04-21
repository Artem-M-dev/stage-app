import './header.scss';

import profile from '../../icons/header/HeaderProfile.svg';

import { Component } from 'react';
import Login from '../login/Login';
import Register from '../register/Register';

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

    showModal = (type) => {
        if (type === 'login') {
            this.setState({
                modal: 'login'
            })
        }

        if (type === 'register') {
            this.setState({
                modal: 'register'
            })
        }
    }

    closeModal = () => {
        this.setState({
            show: 'icon',
            modal: null
        })
    }

    render() {
        const {modal} = this.state;

        const log = modal === 'login' ? <Login showModal={this.showModal} closeModal={this.closeModal}/> : null;
        const register = modal === 'register' ? <Register showModal={this.showModal} closeModal={this.closeModal}/> : null;
        const content = <View 
                            state={this.state} 
                            onChange={this.onChange}
                            showModal={this.showModal}/>

        return (
            <div>
                {content}
                {log}
                {register}
            </div>
        )
    }

}

class View extends Component {

    render() {
        const {onChange, showModal, state} = this.props;

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
                                onClick={() => showModal('login')}
                                >Log In</p>
                            <p 
                                className="header__profile-reg"
                                onClick={() => showModal('register')}   
                                >Register</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;