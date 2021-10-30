import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function ProCard() {

  return (
    <Card 
    href="product_url"
    sx={{
        maxWidth: 345
    }}>
      <CardActionArea>
        <CardMedia
          sx={{
            height: 300,
          }}
          image = "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/225703/1.jpg?7454"
          title="store"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            price
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            name
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}