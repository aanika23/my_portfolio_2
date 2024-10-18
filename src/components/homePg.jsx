import React, { Component } from 'react';
import './css/home.css';
import { Navigate} from 'react-router-dom';

//Folder icons 
import experience_pic from './media/exp_icon.png'
import github_pic from './media/github_icon.png'
import education_pic from './media/education_icon.png'
import linkdin_pic from './media/linkdin_icon.png'
import projects_pic from './media/projects_icon.png'
import email_pic from './media/email_icon.png'
import home_pic from './media/home_icon.png'

export default class HomePg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: new Date().toLocaleDateString(0),
            redirect: false,
        };
    }

    handleProjectsClick = () => {
        console.log("button clicked");
    };

    handleHomeClick = () => {
        this.setState({ redirect: true });
    };

    render() { 
        if (this.state.redirect) {
            return <Navigate to="/" />;
        }

        return (
            <div>
                <div>
                    <button className="image-button" onClick={this.handleProjectsClick}>
                        <img src={experience_pic} id='WE_Icon' alt="work experience folder"></img>
                        <div className='folder-title' id='WE_Text'>Work Experience </div>
                    </button>
                    <button className="image-button" onClick={this.handleProjectsClick}>
                        <img src={github_pic} id='Github_Icon' alt="Github"></img>
                        <div className='folder-title' id='Github_Text'>Github </div>
                    </button>
                </div>
                <div>
                    <button className="image-button" onClick={this.handleProjectsClick}>
                        <img src={education_pic} id='Education_Icon' alt="education folder"></img>
                        <div className='folder-title' id='Education_Text'>Education </div>
                    </button>
                    <button className="image-button" onClick={this.handleProjectsClick}>
                        <img src={linkdin_pic} id='LinkedIn_Icon' alt="LinkedIn"></img>
                        <div className='folder-title' id='LI_Text'>LinkedIn </div>
                    </button>
                </div>
                <div>
                    <button className="image-button" onClick={this.handleProjectsClick}>
                        <img src={projects_pic} id='Projects_Icon' alt="projects folder"></img>
                        <div className='folder-title' id='Projects_Text'>Projects </div>
                    </button>
                </div>
                <div>
                    <button className="image-button" onClick={this.handleProjectsClick}>
                        <img src={email_pic} id='Email_Icon' alt="Email"></img>
                        <div className='folder-title' id='Email_Text'>Email </div>
                    </button>
                </div>
                <div id='footer'>
                    <div id='close_screen'><button className="image-button home-img-button" onClick={this.handleHomeClick}>
                        <img src={home_pic} alt="projects folder"></img>
                    </button></div>
                    <div id='current_date'>{this.state.currentDate}</div>
                </div>
            </div>
           
        );
    }
}
 