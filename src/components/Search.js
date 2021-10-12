import React, { useState, useEffect } from 'react'
import './Search.css'
import SearchIcon from "@material-ui/icons/Search";
import {Button} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Search({ hideButtons = false }) {
    const [products, setProducts] = useState([]);
    const [filteredProducts,setFilteredProducts] = useState(products);

    //Get data from api
    useEffect(() => {
        fetch('/products').then(response => 
            response.json().then(data => {
                setProducts(data.products);
                setFilteredProducts(data.products);
            }));
    {/*       .catch(error => {
                console.log('Error fetching Data from api' + error);
            }) */}
    }, []);

    const [{}, dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const [inputError, setInputError] = useState(false);
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();
        setInputError(false)

        if (input === '') {
            setInputError(true)
        }

        if (input){
            console.log("You searched for>>", input)
        }
        

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        // do something with input..

        //input = e.target.value.toLowerCase();
        let result = [];
        console.log(input);

        result = products.filter((data) => {
            return data.name.search(input) !== -1
        });

        setFilteredProducts(result);
        console.log(result);

        history.push('/search')

    };


    return (
        <form className='search' autocomplete='on' onSubmit={search}>
            <div className='search__input'>
                <SearchIcon className='search__inputIcon' />
                <input value={input} onChange={(e) => setInput(e.target.value)} error={inputError} placeholder='Search Item'/>
            </div>
            <div><br/></div>
            {!hideButtons ? (
                <div className="search__button" >
                <center><Button className="button" color='primary' type='submit' onClick={search} variant="contained">Fetch Price</Button></center> 
             </div>
            ):(
                <div className="search__button" >
               <center><Button className="button__hidden" style={{ color: 'rgb(11, 84, 153)' }} type='submit' onClick={search} variant="outlined">Fetch Price</Button></center> 
            </div>
            )}

            
        </form>
    )
}

export const resToCard = result;

export default Search
