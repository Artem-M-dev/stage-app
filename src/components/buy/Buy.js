import './buy.scss';

const Buy = () => {
    return (
        <div className="buy">
            <div className="buy__head">
                <h2>Buy a library card</h2>
                <div className="buy__close">
                    <div className="buy__close-top"></div>
                    <div className="buy__close-bottom"></div>
                </div>
            </div>
            <div className="buy__main">
                <div className="buy__payment">
                    <div className="payment__first">
                        <div className="buy__payment-input buy__payment-number">
                            <p className="buy__payment-name">Bank card number</p>
                            <input type="text" />
                        </div>
                        <div className="buy__payment-expiration">
                            <p className="buy__payment-name">Expiration code</p>
                            <div>
                                <input type="text" />
                                <input type="text" />
                            </div>
                        </div>
                        <div className="buy__payment-input buy__payment-cvc">
                            <p className="buy__payment-name">CVC</p>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="payment__second">
                        <div className="buy__payment-input buy__payment-name">
                            <p className="buy__payment-name">Cardholder name</p>
                            <input type="text" />
                        </div>
                        <div className="buy__payment-input buy__payment-code">
                            <p className="buy__payment-name">Postal code</p>
                            <input type="text" />
                        </div>
                        <div className="buy__payment-input buy__payment-city">
                            <p className="buy__payment-name">City / Town</p>
                            <input type="text" />
                        </div>
                        <div className="buy__payment-btn">
                            <button>Buy</button>
                            <p>$ 25.00</p>
                        </div>
                    </div>
                </div>
                <p className="buy__text">If you are live, work, attend school, or pay property taxes <br /> in New York State, you can get <br /> a $25 digital library card right now using this online form. Visitors to New York State can also use this form to apply <br />for a temporary card.</p>
            </div>
        </div>
    )
}

export default Buy;