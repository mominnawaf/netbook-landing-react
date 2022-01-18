import React, { Component } from 'react'
import { AppBar, Button, Container, Input, InputAdornment, Link, Toolbar, Typography } from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons'
import Logo from '../../assets/logo.svg'
import './Header.css'

export default class Header extends Component {
    constructor(props) {
        super(props)
    this.state = {
        pages: ['Home', 'Community', 'Blog', 'Event']
    }
    }
    render() {
        return (
            <AppBar color='transparent' position='sticky' className="header" >
               <Container maxWidth='xl'>
                   <Toolbar>
                       <Typography>
                            <img src={Logo} alt='logo'/>
                       </Typography>
                       <div className='links'>
                          {this.state.pages.map(page =>(
                                <Link href='#' className='link'>{page}</Link>
                          ))}
                       </div>
                       <div className='right-header'>
                       <Input placeholder='Search' className="search" startAdornment={<InputAdornment position='start'><SearchOutlined /></InputAdornment>} />
                       <Button variant='contained' className='login'>Login</Button>
                       </div>
                    </Toolbar>
               </Container>
            </AppBar>
        )
    }
}
