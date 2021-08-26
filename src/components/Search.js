import React, { useState } from 'react'
import './Search.css'
import SearchIcon from "@material-ui/icons/Search";
import {Button} from "@material-ui/core";

function Search() {
    const [input, setInput] = useState("");

    const search = e => {
        e.preventDefault();
    };

    return (
        <form className='search'>
            <div className='search__input'>
                <SearchIcon className='search__inputIcon' />
                <input value={input} onChange={e => setInput(e.target.value)}/>
            </div>
            <div><br/></div>

            <div className="search__button">
               <center><Button type='submit' onClick={search} variant="outlined">Fetch</Button></center> 
            </div>
        </form>
    )
}

export default Search
