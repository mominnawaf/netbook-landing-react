import { Button, Card, CardActions, CardContent } from '@material-ui/core'
import React, { Component } from 'react'
import './Achivements.css'
import { ArrowRightAltSharp, StarOutline, EmojiEventsOutlined } from '@material-ui/icons'
import RatingImg from '../../assets/rating-img.png'
import GitHubImg from '../../assets/git-img.png'

export default class Achivements extends Component {
    render() {
        return (
            <div className='achivements-board'>
                <Card className="first-card" elevation={2}>
                    <CardContent>
                        <div style={{display : 'flex', marginLeft : '15px'}}>
                            <StarOutline style={{color:'#217BF4', marginTop : '15px'}}/>
                            <p className='rating-text'>4.8 Rating</p>
                        </div>
                        <div className='img-class'>
                            <img src={RatingImg} alt="rating-img" className='rating-img'/>
                            <div>
                            <p className='img-text'>+836k Members</p>
                            </div>
                        </div>
                        <p className='next-text'>
                        More than 2 billion we people over countries use socibooks we to stay in touch with friends.
                        </p>
                    </CardContent>
                    <CardActions>
                    <Button variant='text' className='firtcard-btn'>Join Our Community <ArrowRightAltSharp/></Button>
                    </CardActions>
                </Card>
                <Card className="first-card" elevation={1}>
                    <CardContent>
                        <div style={{display : 'flex', marginLeft : '15px'}}>
                            <EmojiEventsOutlined style={{color:'#217BF4', marginTop : '15px'}}/>
                            <p className='rating-text'>Awards</p>
                        </div>
                        <div className='img-class'>
                            <img src={GitHubImg} alt="git-img" className='rating-img'/>
                            <div>
                            <p className='git-text'>Best of 2021 on Github</p>
                            </div>
                        </div>
                        <p className='next-text'>
                        More than 2 billion we people over countries use socibooks we to stay in touch with friends.
                        </p>
                    </CardContent>
                    <CardActions>
                    <Button variant='text' className='second-btn'>Go To Awards<ArrowRightAltSharp/></Button>
                    </CardActions>
                </Card>
                <Card className="last-card" elevation={0}>
                    <CardContent>
                        <div style={{display : 'flex', marginLeft : '15px'}}>
                            <p className='achivement-text'>Our Achievement</p>
                        </div>
                        <div className='digital-text'>
                        We are Connecting You The Digital Life.
                        </div>
                        <p className='next-text-2'>
                        The scope the Social Media becomes crucial Is helps the business to directly engage with their needs and wants.
                        </p>
                        <Button className='last-btn'> <p className="dicovertext">Discover More</p></Button>
                    </CardContent>
                </Card>
                
            </div>
        )
    }
}
