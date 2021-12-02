import React, {Component} from 'react';
import Header from '../components/Header'

class LandingPage extends Component {
    render() {
        return(
            <div>
                <Header isAuthenticated={true}/>
                
            </div>
        );
    }
}

export default LandingPage;

