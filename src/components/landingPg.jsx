import React, { Component } from 'react';
import './css/main.css';
import profile_pic from './media/profile_pic.jpg';
import { Navigate } from 'react-router-dom';


export default class LandingPg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeOut: false,
            redirect: false,
        };
    }

    handleStartClick = () => {
        this.setState({ fadeOut: true });

        setTimeout(() => {
            this.setState({ redirect: true }); // Trigger the redirect after fade-out
        }, 800);
    };

    render() { 
        if (this.state.redirect) {
            return <Navigate to="/home-folders" />;
        }

        return (
            
            <div>
                <div className='container'>
                    <img id='image_holder' className={`${this.state.fadeOut  ? 'fade-out' : ''}`}  src={profile_pic} alt='Me'></img>
                    <button id='main_page_btn' className={`${this.state.fadeOut  ? 'fade-out' : ''}`} 
                        onClick={this.handleStartClick}>Get to know Anika Sheikh</button>
                </div>
            </div>
           
        );
    }
}
 