import { AppBar, Container, Typography } from '@mui/material'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <AppBar>
        <Container>
            <Typography sx={{paddingBlock: '12px'}}>IDEA. Project</Typography>
        </Container>
    </AppBar>
  )
}

export default Header