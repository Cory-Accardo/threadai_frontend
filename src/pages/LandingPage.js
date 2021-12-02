import React, {Component} from 'react';
import Header from '../components/Header'

class LandingPage extends Component {
    render() {
        return(
            <div>
                <Header isAuthenticated={false}/>
            </div>
        );
    }
}

export default LandingPage;

