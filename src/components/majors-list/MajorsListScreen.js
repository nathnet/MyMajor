import React, {Component} from 'react';
import NavWithBanner from '../shared/NavWithBanner';
        
class MajorsListScreen extends Component {

    render() {
        return (
            <React.Fragment>
                <NavWithBanner
                    bannerTitle="Majors List"
                    bgImg="./assets/React-icon.png" />
            </React.Fragment>
        );
    }
}

export default MajorsListScreen;