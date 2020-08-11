import React, {Component} from 'react';
import NavWithBanner from '../shared/NavWithBanner';
import PageIntro from '../shared/PageIntro';
        
class ResourcesScreen extends Component {

    render() {
        return (
            <React.Fragment>
                <NavWithBanner
                    bannerTitle="Resources"
                    bgImg="../assets/React-icon.png" />
                <PageIntro 
                    heading="Everything You Need"
                    content="Whether it be financial, academic, or mental assistance that 
                        you need, it's our job to point you in the proper direction for where 
                        you may look for help. Countless organizations, UW-affiliated and 
                        beyond, are who you need right here." />
            </React.Fragment>
        );
    }
}

export default ResourcesScreen;