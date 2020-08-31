import React, { Component } from 'react';
import NavWithBanner from '../shared/NavWithBanner';
import PageIntro from '../shared/PageIntro';
import QuestionBlock from './QuestionBlock';

class SpecificQuizScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quiz: this.props.quiz
        }
    }
    
    render() {
        return(
            <React.Fragment>
                <NavWithBanner
                    bannerTitle="Major Quiz"
                    bgImg="../../assets/pexels-startup-stock-photos-212286.jpg" />
                <PageIntro
                    heading="Helping You Find Your Major"
                    content="Share a little bit about yourself and let our quiz find what majors 
                        might fit you. With over two dozen questions carefully drafted to narrow 
                        down the many UW majors, we've made this quiz to find which majors might 
                        be yours and which ones are definitely outside your interest. When 
                        you’re not sure about what path to take, this quiz is your guide to 
                        crafting your Husky future." />
                <QuestionBlock quiz={this.state.quiz} />
            </React.Fragment>
        );
    }
}

export default SpecificQuizScreen;