import React from 'react';
import { Label, FormGroup, CustomInput, Form, Button } from 'reactstrap';

const QuestionBlock = (props) => {

    const {
        quiz
    } = props;

    const renderQuestion = quiz.questions.map((question, index) => {
        return(
            <div key={question} className="py-5">
                <div className="d-inline-block col-12 col-md-6 border-md-right border-black px-0">
                    <div className="line-height-small font-size-background font-weight-bold text-theme-very-light pb-3">
                        {index + 1}
                    </div>
                    <div className="h1-md h4 card-img-overlay justify-content-start align-items-end py-sm-4 py-lg-5">
                        {question.question}
                    </div>
                </div>
                <div className="d-inline-block col-12 col-md-6 pl-5 py-2 align-top">
                    <FormGroup>
                        <Label size="lg">
                            {question.type === "checkbox" ? 
                            "Check all that apply" :
                            "Check the answer that is closest to you"}
                        </Label>
                        <div>
                            {question.answers.map((answer) => {
                                return(
                                    question.type === "checkbox" ?
                                    <CustomInput type="checkbox" id={answer} label={answer} key={answer}
                                        className="py-1 py-md-0 py-lg-1 custom-control-label-quiz" /> :
                                    <CustomInput type="radio" id={answer} label={answer} name={question.question} key={answer}
                                        className="py-1 py-md-0 py-lg-1 custom-control-label-quiz" />
                                );
                            })}
                        </div>
                    </FormGroup>
                </div>
            </div>
        );
    });

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <div className="col-11 col-lg-10 pb-4 mx-auto my-4">
            <Form onSubmit={handleSubmit}>
                {renderQuestion}
                <div className="text-center">
                    <Button type="submit" className="btn-xl bg-theme ml-3 mr-4">Submit</Button>
                    <Button type="reset" className="btn-xl ml-4 mr-4">Clear</Button>
                </div>
            </Form>
        </div>
    );
}

export default QuestionBlock;