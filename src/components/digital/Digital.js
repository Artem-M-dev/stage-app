import './digital.scss';

const Digital = () => {
    return (
        <div className="digital">
            <h2 className="digital__title">Digital Library Cards</h2>
            <div className="digital__wrapper">
                <div className="digital__payment">
                    <h3 className="digital__payment-title">Find your Library card</h3>
                    <div className="digital__payment-window">
                        <div className="payment__form">
                            <p>Brooklyn Public Library</p>
                            <input type="text" placeholder="Reader's name "/>
                            <input type="text" placeholder="Card number"/>
                        </div>
                        <button className="payment__btn">Check the card</button>
                    </div>
                </div>
                <div className="digital__get">
                    <p className="digital__get-title">Get a reader card</p>
                    <p className="digital__get-description">You will be able to see a reader card after logging into account or you can register a new account</p>
                    <div className="digital__get-buttons">
                        <button>Sign Up</button>
                        <button>Log in</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Digital;