import './coffee.scss';

import { Component } from 'react';

class Coffee extends Component {
    render() {
        return (
            <div className="coffee">
                <h2 className="coffee__title">Coffee shop</h2>
                <p className="coffee__description">In our library, we have of cozy coffee shop, welcoming in customers with frothy cappuccinos and friendly conversation. 
    you can get a favorite book and read in coffee shop. Our barista to cook you best coffee, and also you can try desserts from bakery.</p>
                <div className="coffee__menu">
                    <div className="menu__cell">
                        <h3 className="menu__cell-title">Coffee & Tea </h3>
                        <div className="menu__cell-items">
                            <div className="menu__cell-item">
                                <p className="item__name">Cold Brew Coffee</p>
                                <div></div>
                                <p>$3</p>
                            </div>
                            <div className="menu__cell-item">
                                <p className="item__name">French Press Pot</p>
                                <div></div>
                                <p>$5</p>
                            </div>
                            <div className="menu__cell-item">
                                <p className="item__name">Espresso</p>
                                <div></div>
                                <p>$2</p>
                            </div>
                            <div className="menu__cell-item">
                                <p className="item__name">Cappuccino</p>
                                <div></div>
                                <p>$4</p>
                            </div>
                            <div className="menu__cell-item">
                                <p className="item__name">Hot tea</p>
                                <div></div>
                                <p>$2</p>
                            </div>
                            <div className="menu__cell-item">
                                <p className="item__name">Cold tea</p>
                                <div></div>
                                <p>$2</p>
                            </div>
                        </div>
                    </div>

                    <div className="menu__cell">
                        <h3 id="right" className="menu__cell-title">Desserts & Cakes</h3>
                        <div className="menu__cell-items">
                            <div className="menu__cell-item">
                                <p id="right" className="item__name">Forest Gateau</p>
                                <div></div>
                                <p>$16</p>
                            </div>
                            <div className="menu__cell-item">
                                <p id="right" className="item__name">Blue Moon</p>
                                <div></div>
                                <p>$16</p>
                            </div>
                            <div className="menu__cell-item">
                                <p id="right" className="item__name">Truffle Cake</p>
                                <div></div>
                                <p>$15</p>
                            </div>
                            <div className="menu__cell-item">
                                <p id="right" className="item__name">Chocolate Cake</p>
                                <div></div>
                                <p>$18</p>
                            </div>
                            <div className="menu__cell-item">
                                <p id="right" className="item__name">Poet’s Dream Cake</p>
                                <div></div>
                                <p>$16</p>
                            </div>
                            <div className="menu__cell-item">
                                <p id="right" className="item__name">Pineapple Cake</p>
                                <div></div>
                                <p>$14</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Coffee;