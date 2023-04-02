import React from 'react'
import CustomCard from '../card/CustomCard'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import INews from '../../models/news'

type Props = {
  newsItems: INews[],
  heading: string
}

const Section = (props: Props) => {

  const {newsItems, heading} = props;

  return (
    <Box component={`section`}>
        
        <Typography sx={{marginBlock: '15px', fontSize: 22, fontWeight: 'bold', textTransform: 'capitalize'}}>{heading}</Typography>
        
        <Box sx={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>

          <>
            {
              newsItems.map((item) => (<CustomCard news={item}/>))
            }
          </>
            
        </Box>
    </Box>
  )
}

export default Section