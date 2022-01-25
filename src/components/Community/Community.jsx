import React, { Component } from 'react';
import { Card } from '@material-ui/core';
import './Community.css';
import MemberIcon from '../../assets/member-icon.png';

export default class Community extends Component {
    render() {
        return <div className='community-container'>
            <div className='community-text-container'>
                <div className='our-community'>
                    Our Community
                </div>
                <div className='main-feature'>
                    Community Main Feature
                </div>
                <div className='community-text-main'>
                    The wise man therefore always holds in these matters to this principle of selection.
                </div>
            </div>
            <div className='card-wrapper-main'>
                <div className='two-card-holder'>
                    <Card className="card-container" elevation={1}>
                        <div className='card-wrapper'>
                            <div>
                                <img src={MemberIcon} alt='member-icon' className='card-icon' />
                            </div>
                            <div className='second-div'>
                                <p className='member-p'>Members, Friends</p>
                                <p className='community-text'>Members, Friends Connection ( like followers ), Private Message</p>
                            </div>
                        </div>
                    </Card>
                    <Card className="card-container" elevation={1}>
                        <div className='card-wrapper'>
                            <div>
                                <img src={MemberIcon} alt='member-icon' className='card-icon' />
                            </div>
                            <div className='second-div'>
                                <p className='member-p'>Groups</p>
                                <p className='community-text'>Your users can create groups to let other users to join and talk</p>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className='two-card-holder'>
                    <Card className="card-container" elevation={1}>
                        <div className='card-wrapper'>
                            <div>
                                <img src={MemberIcon} alt='member-icon' className='card-icon' />
                            </div>
                            <div className='second-div'>
                                <p className='member-p'>Forum</p>
                                <p className='community-text'>Forum is ready by BBPress. Your users can make topics and talk.</p>
                            </div>
                        </div>
                    </Card>
                    <Card className="card-container" elevation={1}>
                        <div className='card-wrapper'>
                            <div>
                                <img src={MemberIcon} alt='member-icon' className='card-icon' />
                            </div>
                            <div className='second-div'>
                                <p className='member-p'>Custom Module</p>
                                <p className='community-text'>You can create Members, Groups Module. We already created 3 modules. It's by drag & drop live builder.</p>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className='two-card-holder'>
                    <Card className="card-container" elevation={1}>
                        <div className='card-wrapper'>
                            <div>
                                <img src={MemberIcon} alt='member-icon' className='card-icon' />
                            </div>
                            <div className='second-div'>
                                <p className='member-p'>list Builder</p>
                                <p className='community-text'>Members, Groups list can be modified by drag & drop live builder.</p>
                            </div>
                        </div>
                    </Card>
                    <Card className="card-container" elevation={1}>
                        <div className='card-wrapper'>
                            <div>
                                <img src={MemberIcon} alt='member-icon' className='card-icon' />
                            </div>
                            <div className='second-div'>
                                <p className='member-p'>List Scroll Effects</p>
                                <p className='community-text'>8 different scroll effects are ready.
                                    You can always change by your tastes.</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>;
    }
}
