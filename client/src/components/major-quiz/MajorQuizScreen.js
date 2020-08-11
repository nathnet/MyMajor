import React, {Component} from 'react';
import NavWithBanner from '../shared/NavWithBanner';
import PageIntro from '../shared/PageIntro';
        
class MajorQuizScreen extends Component {

    render() {
        return (
            <React.Fragment>
                <NavWithBanner
                    bannerTitle="Major Quiz"
                    bgImg="./assets/React-icon.png" />
                <PageIntro
                    heading="Helping You Find Your Major"
                    content="Share a little bit about yourself and let our quiz find what majors 
                        might fit you. With over two dozen questions carefully drafted to narrow 
                        down the many UW majors, we've made this quiz to find which majors might 
                        be yours and which ones are definitely outside your interest. When 
                        you’re not sure about what path to take, this quiz is your guide to 
                        crafting your Husky future." />
            </React.Fragment>
        );
    }
}

export default MajorQuizScreen;