import React, { useState, useEffect } from 'react'
import './Search.css'
import SearchIcon from "@material-ui/icons/Search";
import {Button} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import APIService from './APIService';


function Search( {hideButtons = false}) {
    const [products, setProducts] = useState([]);

    {/*//Get data from api
    useEffect(() => {
        fetch('/query_db/<term>').then(response => 
            response.json().then(data => {
                setProducts(data.products);

            }));
         .catch(error => {
                console.log('Error fetching Data from api' + error);
            }) 
    }, []);*/}

    const [{}, dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const [inputError, setInputError] = useState(false);
    const history = useHistory();

    //Send input to APIService
    const insertSearchTerm = () =>{
        APIService.InsertSearchTerm({input}) 
        //.then((response) => props.InsertSearchTerm(response))
        .then((response) => setProducts(response))
        .catch(error => console.log('error',error))
          
    }


    const search = (e) => {
        e.preventDefault();
        setInputError(false)

        if (input === '') {
            setInputError(true)
        }
        
        if (input){
            //dispatch({
            //        type: actionTypes.SET_SEARCH_TERM,
            //       term: input
            //    })
            console.log("You searched for>>", input)

            // do something with input..
            insertSearchTerm()
            setInput('')
            
            
            }
        
        

        history.push('/search')

    };

    // action on update of products
    useEffect(() => {
        async function pushData() {
            dispatch({
                type: actionTypes.SET_SEARCH_RESULTS,
                term: products
            })}
            console.log(products)
        pushData();
    }, [products]);


    return (
        <form className='search' autoComplete='off' onSubmit={search}>
            <div className='search__input'>
                <SearchIcon className='search__inputIcon' />
                <input value={input} onChange={(e) => setInput(e.target.value)} required error={inputError} placeholder='Search Item'/>
            </div>
            <div><br/></div>
            {!hideButtons ? (
                <div className="search__button" >
                <center><Button className="button" color='primary' type='submit' onClick={search} variant="contained">Search</Button></center> 
             </div>
            ):(
                <div className="search__button" >
               <center><Button className="button__hidden" style={{ color: 'rgb(11, 84, 153)' }} type='submit' onClick={search} variant="outlined">Search</Button></center> 
            </div>
            )}

            
        </form>
    )
}

export default Search
