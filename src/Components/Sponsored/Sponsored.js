import React from 'react';
import { Card, Button } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

function Sponsored({ image, url, title, description }) {
  return (
    <Card className='sponsored'>
      <Button href={url} rel='noopener noreferrer' target='_blank'>
        <div className='sponsored__details'>
          <CardContent className='sponsored__content'>
            <Typography component='h5' variant='h5'>
              {title}
            </Typography>
            <Typography variant='subtitle1' color='textSecondary'>
              {description}
            </Typography>
          </CardContent>

          <CardMedia
            className='sponsored__cover'
            image={image}
            title={title}
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
      </Button>
    </Card>
  );
}

export default Sponsored;
