import './register.scss';

const Register = (props) => {
    const {setModal, closeModal} = props;

    return (
        <div className="register">
            <h2 className="register__header">Register</h2>
            <div onClick={closeModal} className="register__close">
                <div className="register__close-top"></div>
                <div className="register__close-bottom"></div>
            </div>
            <div className="register__input">
                <h3>First name</h3>
                <input type="text" />
            </div>
            <div className="register__input">
                <h3>Last name</h3>
                <input type="text" />
            </div>
            <div className="register__input">
                <h3>E-mail</h3>
                <input type="text" />
            </div>
            <div className="register__input">
                <h3>Password</h3>
                <input type="text" />
            </div>
            <button className="register__button">Sign Up</button>
            <p className="register__reg">Already have an account? <span onClick={() => setModal('login')}>Login</span></p>
        </div>
    )
}

export default Register;