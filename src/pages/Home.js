import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import HomeRounded from '@material-ui/icons/HomeRounded';
import logo from "./Logo.png";
import Search from "./../components/Search";

function Home() {
    return (
        <div className='home'>
            <div className='home__header'>

                <div className='home__headerLeft'>
                <HomeRounded />
                </div>

                <div className='home__headerRight'>
                    <Link to='/home'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </div>

            </div>

            <div className='home__body'>
                <img
                src={logo} alt="Logo"/>
            </div>

            <div className="inputContainer">
                {/*Search Input Field*/}
                <Search />
            </div>

        </div>
    )
}

export default Home
