import React, {Component} from 'react';
import NavWithBanner from '../shared/NavWithBanner';
import PageIntro from '../shared/PageIntro';
import QuizCategoryBlock from './QuizCategoryBlock';
        
class MajorQuizScreen extends Component {

    render() {
        return (
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
                <div className="my-4 h2 text-theme text-center">
                    I am most interested in:
                </div>
                <div className="col-11 col-lg-10 h3 py-2 mt-4 mb-5 mx-auto">
                    <QuizCategoryBlock
                        category="The Arts"
                        className="col-12 col-md-6"
                        float="float-left"/>
                    <QuizCategoryBlock
                        category="Biological and Environmental Sciences"
                        className="col-12 col-md-6"
                        float="float-right"/>
                    <QuizCategoryBlock
                        category="Business"
                        className="col-12 col-md-6"
                        float="float-left"/>
                    <QuizCategoryBlock
                        category="Computing"
                        className="col-12 col-md-6"
                        float="float-right"/>
                    <QuizCategoryBlock
                        category="Engineering"
                        className="col-12 col-md-6"
                        float="float-left"/>
                    <QuizCategoryBlock
                        category="Health Sciences"
                        className="col-12 col-md-6"
                        float="float-right"/>
                    <QuizCategoryBlock
                        category="Language and Literature"
                        className="col-12 col-md-6"
                        float="float-left"/>
                    <QuizCategoryBlock
                        category="Math"
                        className="col-12 col-md-6"
                        float="float-right"/>
                    <QuizCategoryBlock
                        category="Physical Sciences"
                        className="col-12 col-md-6"
                        float="float-left"/>
                    <QuizCategoryBlock
                        category="Social Sciences"
                        className="col-12 col-md-6"
                        float="float-right"/>
                    <QuizCategoryBlock
                        category="I'm not sure"
                        className="col-12"
                        float="float-left"
                        full={true}
                        link="general"/>
                </div>
            </React.Fragment>
        );
    }
}

export default MajorQuizScreen;