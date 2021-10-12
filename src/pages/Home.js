import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import GitHubIcon from '@material-ui/icons/GitHub';
import logo from "./Logo.png";
import Search from "./../components/Search";
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import HomeIcon from '@material-ui/icons/Home';
import { Typography } from '@material-ui/core';

function Home() {
    
    return (
        <div className='home'>
            <div className='home__header'>

                <div className='home__headerLeft'>
                <GitHubIcon />
                </div>

                <div className='home__headerRight'>
                    <Link to='/home'><HomeIcon/></Link>
                    <Link to='/about'><InfoIcon /></Link>
                    <Link to='/contact'><ContactMailIcon /></Link>
                </div>

            </div>
            
            <div className='home__body'>
                <div><br/></div>
                <div><br/></div>
                <img
                src={logo} alt="Company Logo"/>
                <Typography
                variant='subtitle1'
                align='center'
                color='textPrimary'
                >
                <p>Get the Best Deal!</p>
                <p>Search and Compare the Price accross Online Stores.</p>
                </Typography>
            </div>

            <div className="inputContainer">
                {/*Search Input Field*/}
                <Search />
            </div>

        </div>
    )
}

export default Home
