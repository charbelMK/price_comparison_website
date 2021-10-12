import React from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider'
import NavBar from '../components/NavBar';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import ProCard from '../components/ProCard';
import { resToCard } from '../components/Search';


function SearchPage() {
    const [{ term }, dispatch] = useStateValue();

    return (
        <div className='searchPage'>

            <div className='searchPage__header' >
             
                <NavBar />
            </div>

            <Container className='searchPage__results'>
              
              {term && (
              <div>
                  <p className='searchPage__resultsCount'>About 3000 results (0.3 seconds)</p>
              </div>
              
              )}
              <div><br/></div>
              <div><br/></div>
              
              <div>
                <Grid container spacing={1}>
                    {resToCard.map(res => (
                        <Grid item key={res.product_url} xs={12} sm={6} md={3}>
                        <ProCard res={res} />
                    </Grid>
                    ))}
                    
                </Grid>
            </div>
            </Container>
            
            
        </div>
    )
}

export default SearchPage

