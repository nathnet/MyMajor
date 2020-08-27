import React, {Component} from 'react';
import NavWithBanner from '../shared/NavWithBanner';
import PageIntro from '../shared/PageIntro';
import QuizCategoryBox from './QuizCategoryBox';
        
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
                <div className="my-4 h2 text-theme text-center">
                    I am most interested in:
                </div>
                <div className="col-11 col-lg-10 h3 py-2 my-4 mx-auto">
                    <QuizCategoryBox
                        category="The Arts"
                        className="col-12 col-md-6"
                        float="float-md-left"/>
                    <QuizCategoryBox
                        category="Biological and Environmental Sciences"
                        className="col-12 col-md-6"
                        float="float-md-right"/>
                    <QuizCategoryBox
                        category="Business"
                        className="col-12 col-md-6"
                        float="float-md-left"/>
                    <QuizCategoryBox
                        category="Computing"
                        className="col-12 col-md-6"
                        float="float-md-right"/>
                    <QuizCategoryBox
                        category="Engineering"
                        className="col-12 col-md-6"
                        float="float-md-left"/>
                    <QuizCategoryBox
                        category="Health Sciences"
                        className="col-12 col-md-6"
                        float="float-md-right"/>
                    <QuizCategoryBox
                        category="Language and Literature"
                        className="col-12 col-md-6"
                        float="float-md-left"/>
                    <QuizCategoryBox
                        category="Math"
                        className="col-12 col-md-6"
                        float="float-md-right"/>
                    <QuizCategoryBox
                        category="Physical Sciences"
                        className="col-12 col-md-6"
                        float="float-md-left"/>
                    <QuizCategoryBox
                        category="Social Sciences"
                        className="col-12 col-md-6"
                        float="float-md-right"/>
                    <QuizCategoryBox
                        category="I'm not sure"
                        className="col-12"
                        link="general"/>
                </div>
            </React.Fragment>
        );
    }
}

export default MajorQuizScreen;