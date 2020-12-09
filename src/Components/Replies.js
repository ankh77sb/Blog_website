import React, {Component} from 'react';
import {Form,FormGroup,Input,ListGroupItem,ListGroup,Button} from 'reactstrap';
import { ThumbUp, ThumbUpOutlined} from '@material-ui/icons';
import {IconButton} from '@material-ui/core'
import './Blogpage.css';


const convertToString = (date) => {
    let string = date.toString();
    let datestring = string.slice(8,10)+' '+string.slice(4,7)+' '+string.slice(11,15);
    return datestring;
}

function Reply({replies,togglelike}) {
    var temp=null;
    if(replies.length){
    temp = replies.map((reply)=>{
        return(
        <ListGroupItem key={reply.id} className='list' style={{border:'none'}}>
            <div className='row'>
                <img className='col-xs-3'style={{height:'40px',width:'40px',borderRadius:50}} src={'indore_logo.png'} 
                    alt='profile'/>
                <div style={{display:"flex",flexDirection:"column"}}className='row ml-1'>
                    <a href='#' style={{paddingLeft:20,color:"black",textDecoration:"underline"}}><b>{reply.author.name}</b></a>
                    <p>{convertToString(reply.date)}</p>
                </div>
            </div>
            <p>{reply.comment}</p>
            <div className='row'>
                <div className='col-xs-6 row' style={{marginLeft:'1%'}}>
                    <IconButton style={{outline:"none"}}onClick={()=>togglelike(reply)}>
                        {reply.liked ? 
                        (<ThumbUp/>): (
                        <ThumbUpOutlined/>
                        )}
                    </IconButton>
                    <p style={{marginTop:'revert'}}>{reply.likes}</p>
                </div>
            </div>
        </ListGroupItem>
        )
    })}
    return(
        <>
        {temp}
        </>
    )

}

class Replies extends Component{
    constructor(props){
        super(props);
        this.state= {
            value:'',
            replies:[]
        }
        this.commentSubmit=this.commentSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.togglelike=this.togglelike.bind(this);
    }

    commentSubmit(event){
        event.preventDefault();
        const newreply = {
            id:this.state.replies.length,
            comment:this.state.value,
            author:{
                name:'lokesh',
                image:'#'
            },
            date: new Date(),
            likes:0,
            liked:false
        };
        this.setState({
            replies:[...this.state.replies,newreply],
            value:''
        })
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    togglelike(reply){
        console.log(this.state.replies)
        var items=[...this.state.replies];
        var item = {...items[reply.id]};
        item.liked=!(item.liked);
        if(reply.liked){
            item.likes-=1;    
        }
        else{
            item.likes+=1
        }

        items[reply.id]=item;
        this.setState({
            replies:items
        }) 
    }

    render(){
        return(
            <div>
                <div className='row'>
                    <img className='col-xs-3'style={{height:'40px',width:'40px',borderRadius:50}} src={'indore_logo.png'} alt='profile' />
                    <Form onSubmit={(event)=>{this.commentSubmit(event)}}>
                        <FormGroup>
                            <Input className='commentbox' type='textarea' name='reply' 
                                placeholder='share your opinion' value={this.state.value} onChange={this.handleChange} />
                        </FormGroup>
                        <Button size='sm' type='submit' color='success'>Respond</Button>
                    </Form>
                </div>
                <ListGroup>
                    <Reply replies={this.state.replies} togglelike={this.togglelike}/>
                </ListGroup>
            </div>
        )
    }
}

export default Replies;