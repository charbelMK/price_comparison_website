import React, { useState, useContext } from 'react'
import { useStateValue } from '../StateProvider'
import { StateContext } from '../StateProvider'
import NavBar from '../components/NavBar';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Search from '../components/Search';
import ProCard from '../components/ProCard';



function SearchPage() {
    //const [{ term }, dispatch] = useStateValue();
    const [{ products }, dispatch] = useStateValue();
    const items = useContext(StateContext);


    console.log(products)

   {/* // update the existing article list
    const setProducts = (pro) =>{
        debugger
        this.setItems({ setProducts});
        console.log(items)
      }

    // define variables for the present state of the form and another to change its state
    const [showSearch, setShowSearch] = useState(false);
    
    // toggle between the two states,visible and hidden
    const toggleShowSearch = () => {
        setShowSearch(!showSearch);
    }

    useEffect(() => {
        async function pushData() {
            fetch(products).then(data => setItems(data))
            }
        pushData();
    }, [items]);
    

    let itemsToRender;
    if (items) {
        itemsToRender = items.map(item => {
        return <p key={item.product_url}>{item.name}</p>;
        });
    }*/}

    
    return (
        <div className='searchPage'>

            <div className='searchPage__header' >
            
                <NavBar />
            </div>

            <Container className='searchPage__results'>
            
            {products && (
            <Search
            setProducts = {this.InsertedProducts}
            />
            
            )}
            <div><br/></div>
            <div><br/></div>
            
            <div>
            
                <Grid container spacing={1} elevation={5}>
                    <Grid item xs={12} sm={6} md={3}>
                        <ProCard />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <ProCard />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <ProCard />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <ProCard />
                    </Grid>
                    
                </Grid>
            </div>
            
            </Container>
            
            
        </div>
    );
  
    
}

export default SearchPage

