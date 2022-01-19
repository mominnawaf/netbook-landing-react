import { List, ListItem, ListItemIcon } from '@material-ui/core'
import React, { Component } from 'react'
import {CheckCircle} from '@material-ui/icons'
import './Aboutus.css'
import VideoImg from '../../assets/video-img.png'
import Img2 from '../../assets/image-2.png'
import Img3 from '../../assets/image-3.png'

export default class Aboutus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            List: ['Group','Message','Share']
        }
    }
    render() {
        return (
            <div className='about-us-container'>
                <div className='about-us-left'>
                    <div className='about-us-wrapper'>
                        <p className='whats-notebook'>
                        Whats Netboks?
                        </p>
                        <p className='why-join'>
                        Why Join to Netbook Social Network?
                        </p>
                        <p className='why-join-more'>
                        Recent surveys have indicated that small businesses recognise the need they have to connect with consumer.
                        </p>
                        <List>
                            {this.state.List.map(item => {
                                return (
                                    <ListItem className='list-item'>
                                        <ListItemIcon>
                                            <CheckCircle style={{color: "#217BF4"}}/>
                                        </ListItemIcon>
                                        {item}
                                    </ListItem>
                                )
                            })}
                        </List>
                    </div>
                </div>
                <div className='about-us-right'>
                   <img className='video-img' src={VideoImg} alt='video-img'/>
                   <div className='two-images'>
                   <img className="childimg" src={Img2} alt='video-img'/>
                   <img className="childimg" src={Img3} alt='video-img'/>
                   </div>
                </div>
            </div>
        )
    }
}
