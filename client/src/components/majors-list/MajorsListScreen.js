import React, {Component} from 'react';
import NavWithBanner from '../shared/NavWithBanner';
import PageIntro from '../shared/PageIntro';
        
class MajorsListScreen extends Component {

    render() {
        return (
            <React.Fragment>
                <NavWithBanner
                    bannerTitle="Majors List"
                    bgImg="./assets/React-icon.png" />
                <PageIntro
                    heading="All Your Options in One Place"
                    content="At UW, your major is your first step into a boundless career. 
                        But what majors UW offers can be a tricky subject. Here you'll find 
                        every major that UW has to offer and can easily sort and see what 
                        majors might pique your interest." />
            </React.Fragment>
        );
    }
}

export default MajorsListScreen;