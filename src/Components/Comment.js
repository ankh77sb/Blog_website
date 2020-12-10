import React, {Component} from 'react';
import {ListGroupItem} from 'reactstrap';
import { ThumbUp, ThumbUpOutlined,InsertComment} from '@material-ui/icons';
import {IconButton} from '@material-ui/core'
import './blogpage.css';
import Replies from './Replies'

const convertToString = (date) => {
    let string = date.toString();
    let temp = string.slice(8,10)+' '+string.slice(4,7)+' '+string.slice(11,15);
    return temp;
}

class Comment extends Component{
    constructor(props){
        super(props);
        this.state= {
            showReplies:false
        }
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick(){
        this.setState({
            showReplies:!(this.state.showReplies)
        })
    }
    

    render(){
        return(
            <ListGroupItem key={this.props.comment.id} className='list' style={{border:'none'}}>
                <div className='row'>
                    <img className='col-xs-3' style={{height:'40px',width:'40px',borderRadius:50}} src={'indore_logo.png'} 
                        alt='profile'/>
                    <div style={{display:"flex",flexDirection:"column"}}className='row ml-2'>
                        <a href='#' style={{color:"black",textDecoration:"underline"}}><b>{this.props.comment.author.name}</b></a>
                        <p>{convertToString(this.props.comment.date)}</p>
                    </div>
                </div>
                <p>{this.props.comment.comment}</p>
                <div className='row'>
                    <div className='col-6 col-sm-4 col-lg-5 row'>
                        <IconButton style={{outline:"none"}}onClick={()=>this.props.togglelike(this.props.comment)}>
                            {this.props.comment.liked ? (
                                <ThumbUp/>
                            ): (
                                <ThumbUpOutlined/>
                            )}
                        </IconButton>
                        <p style={{marginTop:'revert'}}>{this.props.comment.likes}</p>
                    </div>
                    <IconButton onClick={()=>this.handleClick()}style={{outline:'none'}}><InsertComment color='disabled'/></IconButton>
                </div>
                {this.state.showReplies ? (
                    <Replies comment={this.props.comment}/>
                ): (<></>)}
            </ListGroupItem>
        )
    }
}

export default Comment;