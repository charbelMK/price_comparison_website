import React, {useState} from 'react'
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 300,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));
  
  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });
  
  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));
  
  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));
  
  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));


function ProductCard() {
    
    return (
      <ImageList cols={4} gap={0}>

        {itemData.map((item) => (
          <ImageListItem key={item.img}>
           <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
           
           <ImageButton
          focusRipple
          href={item.link}
          style={{
            width: 260,
            height: 300,
          }}
        >
            <ImageSrc style={{ backgroundImage: `url(${item.img})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
                {item.store}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
            </Image>
        </ImageButton>
      
    </Box>
            {/* {<img
              src={`${item.img}?w=260&fit=crop&auto=format&h=300`}
              srcSet={`${item.img}?w=260&fit=crop&auto=format&dpr=2&h=300 2x`}
              alt={item.title}
              loading="lazy"
              sx={{
                width:248,
              }}
            />
                {isHovered && (
                    <Button
                    href={item.link}
                    size="medium"
                    style={{
                        position: "relative",
                        left: 95,
                    }}
                    variant="contained"
                    >
                    {item.store}
                    </Button>
                )}} */}
        
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              sx={{
                maxWidth:260,
                lineClamp:2,  
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgb(11, 84, 153)' }}
                  aria-label={`info about ${item.title}`}
                  href={item.link}
                >
                  <InfoIcon />
                </IconButton>
              }
              position='below'
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }
  
  const itemData = [
    {
      img: 'https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/720173/1.jpg',
      title: 'Eako Disposable Face Mask 3ply - 50pcs Pack',
      author: 'KSh 220',
      store: 'Jumia',
      link: 'http://jumia.co.ke/disposable-face-mask-3-ply-50pcs-generic-mpg229570.html',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      author: '@nolanissac',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      author: '@hjrc33',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
      featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      author: '@tjdragotta',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      author: '@katie_wasserman',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      author: '@silverdalex',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      author: '@shelleypauls',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      author: '@peterlaster',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      author: '@southside_customs',
    },
  ];

export default ProductCard