import React, {Component} from 'react';
import PageIntro from '../shared/PageIntro';
import TopNavbar from '../shared/TopNavbar';
import errorImage from '../../assets/404_background.jpg';
        
class ResourcesScreen extends Component {


    render() {
        return (
            <React.Fragment>
                <TopNavbar />
                <PageIntro 
                    heading="Everything You Need..."
                    content="is gone." />
                <div className="bg-fit min-vh-100" style={{backgroundImage: `url(${errorImage})`}}>
                </div>
            </React.Fragment>
        );
    }
}

export default ResourcesScreen;