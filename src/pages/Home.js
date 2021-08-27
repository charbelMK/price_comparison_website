import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import GitHubIcon from '@material-ui/icons/GitHub';
import logo from "./Logo.png";
import Search from "./../components/Search";

function Home() {
    return (
        <div className='home'>
            <div className='home__header'>

                <div className='home__headerLeft'>
                <GitHubIcon />
                </div>

                <div className='home__headerRight'>
                    <Link to='/home'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </div>

            </div>
            
            <div className='home__body'>
                <img
                src={logo} alt="Company Logo"/>
                <center><important><p>Get the Best Deal!</p></important></center>
                <center><important><p>Search and Compare the Price accross Online Stores</p></important></center>
            </div>

            <div className="inputContainer">
                {/*Search Input Field*/}
                <Search />
            </div>

        </div>
    )
}

export default Home
