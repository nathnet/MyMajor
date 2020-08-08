import React, {Component} from 'react';
import NavWithBanner from '../shared/NavWithBanner';
        
class ResourcesScreen extends Component {

    render() {
        return (
            <React.Fragment>
                <NavWithBanner
                    bannerTitle="Resources"
                    bgImg="../assets/React-icon.png" />
            </React.Fragment>
        );
    }
}

export default ResourcesScreen;