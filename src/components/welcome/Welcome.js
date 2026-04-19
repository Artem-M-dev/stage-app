import './welcome.scss';

import { Component } from 'react';

class Welcome extends Component {
    render() {
        return (
            <div className="welcome">
                <div className="welcome__title">
                    <h1>Welcome <br /> to the Brooklyn <br /> Library</h1>
                </div>
            </div>
        )
    }
}

export default Welcome;