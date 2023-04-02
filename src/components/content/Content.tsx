import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router'
import { Link } from 'react-router-dom';

const HomeComponent = React.lazy(() => import('../../routes/HomeComponent'));
const CategoryComponent = React.lazy(() => import('../../routes/CategoryComponent'));

type Props = {}

const Content = (props: Props) => {

  
  
  return (
    <Container sx={{paddingTop: '70px', paddingBottom: '30px',}}>

      <React.Suspense fallback={<div><Typography variant='h6'>Loading...</Typography></div>}>

        <Routes>

          <Route index  element={<HomeComponent/>} />

          <Route path='/category/:category' element={<CategoryComponent/>}/>

          <Route path='*' element={
              <div>
                <Typography variant='h3'>Error 404: Not Found</Typography>
                <Button to='/' component={Link}>Go to Home</Button>
              </div>
            }
          />

        </Routes>

      </React.Suspense>
        
    </Container>
  )
}

export default Content