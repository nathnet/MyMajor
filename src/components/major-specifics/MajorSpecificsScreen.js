import React, {Component} from 'react';
import NavWithBanner from '../shared/NavWithBanner';
        
class MajorSpecificsScreen extends Component {

    render() {
        return (
            <React.Fragment>
                <NavWithBanner
                    bannerTitle="Major's Name"
                    bgImg="../assets/React-icon.png" />
            </React.Fragment>
        );
    }
}

export default MajorSpecificsScreen;