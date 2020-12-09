import React, { Component } from 'react';
import '../App.css';
import { CommentOutlined,Facebook, ShareOutlined,ThumbUp, ThumbUpOutlined,TurnedIn,TurnedInNot} from '@material-ui/icons';
import {Button,UncontrolledDropdown,DropdownToggle,DropdownItem, DropdownMenu} from 'reactstrap';
import {IconButton} from '@material-ui/core';
import {useMediaQuery} from 'react-responsive';

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 769 })
    return isDesktop ? children : null
}

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 768 })
    return isMobile ? children : null
}

class Author extends Component{
    constructor(props){
        super(props);
        this.state={
            dropdownopen:false
        }
    }


    render(){
        return(
            <>
            <Desktop>
                <div className='col-md-3 Author'>
                    <div style={{marginLeft:"2em"}}>
                        <p><b>Written By</b></p>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <img src={'indore_logo.png'} alt='profile' style={{height:40,width:40,borderRadius:50}}/>
                            <h5 style={{marginLeft:'10px'}}>{this.props.author}</h5>
                            <p style={{color:'gray'}}>2.4k followers</p>
                        </div>
                        <p style={{color:"gray"}}>I am a student of IIT indore. I am doing my undergraduate.</p>
                        {this.props.following ? (
                            <Button style={{width:100}}onClick={this.props.togglefollow} outline-dark={1} color='dark'>Following</Button>
                            ) : (<Button onClick={this.props.togglefollow} outline-dark={1} color='light'>Follow</Button>)
                        }
                        <hr style={{backgroundColor: 'black',height: 1}}/>
                        <div className='row'>
                            <p className='col-6'>
                                <IconButton disableFocusRipple={true} style={{outline:'none'}} onClick={this.props.togglelike}>
                                    {this.props.liked ? (
                                        <ThumbUp/>
                                    ): (<ThumbUpOutlined/>)}
                                </IconButton>{this.props.likes}
                            </p>
                            <p className='col-6'>
                                <IconButton disableFocusRipple={true} style={{outline:'none'}} onClick={this.props.togglebookmark}>
                                    {this.props.bookmarked ? (
                                        <TurnedIn/>
                                    ): (<TurnedInNot/>)}
                                </IconButton>
                            </p>
                        </div>
                        <div className='row'>
                            <p className='col-6'>
                            <IconButton style={{outline:'none'}} onClick={this.props.togglecomments}>
                                <CommentOutlined />
                            </IconButton>
                            </p>
                            <UncontrolledDropdown  size='sm' className='col-6 mt-2'>
                                <DropdownToggle style={{backgroundColor:'white',border:'none',outline:'none'}}className='nav-link'>
                                    <ShareOutlined style={{color:'gray',backgroundColor:'white',border:'none'}}/>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem tag='a'><Facebook />facebook</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                    </div>
                </div>
            </Desktop>
            <Mobile>
                <div style={{width:'100%'}}>
                    <div className='row' style={{marginLeft:'2%'}}>
                        <img src={'indore_logo.png'} alt='profile' style={{height:27,width:27,borderRadius:50}}/>
                        <h5 style={{marginLeft:'inherit'}}>{this.props.author}</h5>
                        <p style={{marginLeft:'5%',color:'grey'}}>2.4k followers</p>
                        {this.props.following ? (
                            <Button size='sm' style={{marginLeft:'20%',height:'31px'}}onClick={this.props.togglefollow} outline-dark={1} color='dark'>Following</Button>
                            ) : (<Button size='sm' style={{marginLeft:'20%',height:'31px'}} onClick={this.props.togglefollow} outline-dark={1} color='light'>Follow</Button>)
                        }
                    </div>
                    <div className='row' style={{marginLeft:'1%'}}>
                        <IconButton disableFocusRipple={true} style={{outline:'none'}} onClick={this.props.togglebookmark}>
                            {this.props.bookmarked ? (
                                <TurnedIn/>
                            ): (<TurnedInNot/>)}
                        </IconButton>
                        <UncontrolledDropdown  size='sm' className='mt-2'>
                            <DropdownToggle style={{backgroundColor:'white',border:'none',outline:'none'}}className='nav-link'>
                                <ShareOutlined style={{color:'gray',backgroundColor:'white',border:'none'}}/>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem tag='a'><Facebook />facebook</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <IconButton disableFocusRipple={true} style={{outline:'none'}} onClick={this.props.togglelike}>
                            {this.props.liked ? (
                                <ThumbUp/>
                            ): (<ThumbUpOutlined/>)}
                        </IconButton><p style={{marginTop:'auto'}}>{this.props.likes}</p>
                    </div>
                </div>
            </Mobile>
            </>
        )
    }
    
}

export default Author;