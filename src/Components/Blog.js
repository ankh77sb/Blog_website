import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './blogpage.css';
import {useMediaQuery} from 'react-responsive';
import Author from './Author';
import {IconButton} from '@material-ui/core';
import {UncontrolledDropdown,DropdownToggle,DropdownItem, DropdownMenu} from 'reactstrap';
import { CommentOutlined,Facebook, ShareOutlined,ThumbUp, ThumbUpOutlined,TurnedIn,TurnedInNot} from '@material-ui/icons';



function Rendertags({tags}){
    const imp = tags.map((tag)=>{
        return(
            <ListGroupItem className='tags' style={{backgroundColor:'darkgrey',padding:'inherit',justifyContent:'center'}}>
                <b style={{padding:'0.5em 0.5em'}}>{tag}</b>
            </ListGroupItem>
        )
    })

    return(
        <ListGroup horizontal>
            {imp}
        </ListGroup>
    ) 

}

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 768 })
    return isMobile ? children : null
}


class Blog extends Component{

    render(){
        return(
            <div color='light'  className='col-md-12 col-lg-6 Blog'>
                <h3 className='BlogHead'>William Shakespeare</h3>
                <p style={{textAlign:'left'}}>27 Dec 2020. 3 min read</p>
                <Mobile>
                    <Author author={this.props.author} 
                        likes={this.props.likes} 
                        liked={this.props.liked}
                        togglelike={this.props.togglelike}
                        following={this.props.following}
                        togglefollow={this.props.togglefollow}
                        bookmarked={this.props.bookmarked}
                        togglebookmark={this.props.togglebookmark}
                    />
                 </Mobile>
                <div className='Blog' dangerouslySetInnerHTML={{__html:this.props.blog_html}}/>
                <Rendertags tags={["lokesh","nene","lokesh","How are you?","evaru"]}/>
                <Mobile>
                    <div className='row' style={{marginLeft:'1%',marginTop:'2%'}}>
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
                        </IconButton>
                        <IconButton style={{outline:'none'}} onClick={this.props.togglecomments}>
                                <CommentOutlined />
                        </IconButton>
                    </div>
                </Mobile>
        </div>
    )
    }
}

export default Blog;