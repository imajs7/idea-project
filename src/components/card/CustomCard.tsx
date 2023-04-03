import { Button, CardActions, CardContent, CardHeader, Divider, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import React from 'react'
import INews from '../../models/news'
import Grid from '@mui/material/Grid'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

type Props = {
  news: INews
}

const CustomCard = (props: Props) => {

  const {news} = props;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card variant="outlined" sx={{padding: '0.5rem'}}>
        <CardHeader title={news.title}/>
        <Divider/>
        <CardContent>
          <Typography variant='body1'>{news.body}</Typography>
          <Divider sx={{marginBlock: '1rem'}}/>
          <Typography variant='button'>{news.category}</Typography> <ArrowRightAltIcon sx={{verticalAlign: 'middle'}}/> 
          <Typography variant='button'>{news.subcategory}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant='contained'>Read Later</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default CustomCard