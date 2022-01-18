import React, { Component } from 'react'
import './Base.css'
import BaseImg from '../../assets/base-img.svg'
import { Button } from '@material-ui/core'

export default class Base extends Component {
    render() {
        return (
            <div className='base-contianer'>
                <div className='left-header'>
                    <div className='wrapper'>
                        <Button className='community-button'> <p className='community-button-p'>Netbook community</p></Button>
                        <h1>Your Solutions For Community!</h1>
                        <h4>More than 2 billion people in over countries use socibook to stay in touch with friends & family.</h4>
                        <div>
                            <Button className='about-more'><p className='about-more-text'>About More</p></Button>
                            <Button className='invite-friend'><p className='invite-text'>Invite Friend</p></Button>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <img src={BaseImg} alt='base'/>
                </div>
            </div>
        )
    }
}
