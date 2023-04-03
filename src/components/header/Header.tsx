import { AppBar, Container, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Header = (props: Props) => {
  return (
    <AppBar>
        <Container>
            <Link to='/'><Typography sx={{paddingBlock: '12px', color: '#fff'}}>IDEA. Project</Typography></Link>
        </Container>
    </AppBar>
  )
}

export default Header