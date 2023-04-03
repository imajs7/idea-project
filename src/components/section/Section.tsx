import React from 'react'
import CustomCard from '../card/CustomCard'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import INews from '../../models/news'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid'

type Props = {
  newsItems: INews[],
  heading: string,
  subheading: string
}

const CustomGrid = styled('div')({
  flexGrow: 1,
  margin: '0 auto',
  maxWidth: 1200,
  padding: '0 1rem',
});

const Section = (props: Props) => {

  const {newsItems, heading, subheading} = props;

  return (
    <Box component={`section`}>
        
        <Typography sx={{marginBlock: '15px', fontSize: 22, fontWeight: 'bold', textTransform: 'capitalize'}}>{heading} - ({subheading})</Typography>
        
        <CustomGrid>

          <Grid container spacing={2}>

          <>
            { newsItems.length ? (
                newsItems.map((item, idx) => (<CustomCard key={idx} news={item}/>))
              ) : (
                <Box>
                  <Typography>Nothing to display...</Typography>
                </Box>
              )
            }
          </>

          </Grid>
            
        </CustomGrid>
    </Box>
  )
}

export default Section