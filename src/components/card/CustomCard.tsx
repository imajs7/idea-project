import { Button, CardActionArea, CardActions, CardContent, CardHeader, Divider, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import React from 'react'
import INews from '../../models/news'

type Props = {
  news: INews
}

const CustomCard = (props: Props) => {

  const {news} = props;

  return (
    <Card variant="outlined" sx={{ width: '100%', flexBasis: 300, maxWidth: 300 }}>
      <CardHeader title={news.title}/>
      <Divider/>
      <CardContent>
        <Typography>{news.body}</Typography>
      </CardContent>
      <CardActionArea>
        <CardActions>
          <Button size="small" variant='contained'>Read Later</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

export default CustomCard