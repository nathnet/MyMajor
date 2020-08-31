import React, {Component} from 'react';
import NavWithBanner from '../shared/NavWithBanner';
import MajorDetails from './MajorDetails';
import Prereqs from './Prereqs';
import CareerPaths from './CareerPaths';
import ClassInfo from './ClassInfo';
import StudentDetails from './StudentDetails';
import Faculty from './Faculty';
import RelStudies from './RelStudies';
        
class MajorSpecificsScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            major: this.props.major
        };
    }

    render() {
        const major = this.state.major;

        const prereqs = <Prereqs content={major.prereqs} />;
        const careerPaths = <CareerPaths content={major.careers} />;
        const classInfo = <ClassInfo content={major.classInfo} />;
        const studentDetails = <StudentDetails content={major.studentDetails} />;
        const faculty = <Faculty content={major.faculty} />;
        const relStudies = <RelStudies content={major.relStudies} />;

        return (
            <React.Fragment>
                <NavWithBanner
                    bannerTitle={major.major}
                    bgImg="../assets/pexels-lumn-327882.jpg" />
                <div className="row col-11 col-xl-10 mx-auto">
                    <div className="col-12 col-md-6 col-lg-5 ml-lg-auto">
                        <MajorDetails heading="Prerequisites" content={prereqs} />
                        <MajorDetails heading="Potential Career Paths" content={careerPaths} />
                        <MajorDetails heading="Class Info" content={classInfo} />
                    </div>
                    <div className="d-none d-lg-block col-lg-1"></div>
                    <div className="col-12 col-md-6 col-lg-5 mr-lg-auto">
                        <MajorDetails heading="Student Details" content={studentDetails} />
                        <MajorDetails heading="Faculty" content={faculty} />
                        <MajorDetails heading="Related Majors and Minors" content={relStudies} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MajorSpecificsScreen;