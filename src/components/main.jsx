import React, { Component } from 'react';
import LandingPg from './landingPg';
import HomePg from './homePg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default class Main extends Component {
    state = {  } 
    render() { 
        return (
            <BrowserRouter>
                <div id="container">
                    <Routes>
                        <Route path="/" element={<LandingPg/>}/>
                        <Route path="/home-folders" element={<HomePg/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
           
        );
    }
}
 