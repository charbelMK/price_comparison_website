import React from 'react'
import { Link } from "react-router-dom";
import './NavBar.css'
import Stack from '@material-ui/core/Stack';
import logo from "./Logo.png";
import Search from './Search';
import ToggleSwitch from './ToggleSwitch';
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import HomeIcon from '@material-ui/icons/Home';


function NavBar() {

    return (
        <div className='navBar'>
            <div className='home__headerLeft'>
                <Link to="/">
                    <img className='searchPage__logo'
                    src={logo} alt="Company Logo"/>
                </Link>

                <div className='searchPage__headerBody'>
                     <Search hideButtons />
                </div>
                     <div className='searchPage__options'>
                        <ToggleSwitch Name='Local' />
                        <label style={{color:'white'}} ><pre> Local  </pre></label>
                        
                        <ToggleSwitch Name='Global' />
                        <label style={{color:'white'}}><pre> Global</pre></label>
                     </div>
            </div>
                <div>
                    <Stack direction="row" spacing={0}>
                    
                        <Link to='/home'><HomeIcon /></Link>
                    
                        <Link to='/about'><InfoIcon /></Link>
                
                        <Link to='/contact'><ContactMailIcon /></Link>
                    
                    </Stack>
                
                </div>

        </div>
    )
}

export default NavBar
