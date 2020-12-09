import React, {Component} from 'react';
import {Input,Form,FormGroup, Button, ListGroup} from 'reactstrap';
import Comment from './Comment';
import './Blogpage.css';


class Comments extends Component{
    constructor(props){
        super(props);
        this.state= {
            value:'',
        }
        this.handleChange=this.handleChange.bind(this);
        this.commentSubmit=this.commentSubmit.bind(this);
    }


    handleChange(event){
        this.setState({value: event.target.value});
    }

    commentSubmit(event){
        event.preventDefault();
        this.props.commentSubmit(this.state.value);
        this.setState({
            value:''
        })
    }

    
    render(){
        
        function RenderComments({comments,togglelike}){
            const comp = comments.map((comment)=> {
                return(
                    <Comment comment={comment} togglelike={togglelike} />
                )
            })
            return(
                <ListGroup style={{paddingTop:20}}>
                    {comp}
                </ListGroup>
            )
        }
        return(
            <div className='col-md-3 comments'>
                <h4>Comments ({this.props.comments.length})</h4>
                <div className='row'>
                    <img className='col-xs-3'style={{height:'40px',width:'40px',borderRadius:50}} src={'indore_logo.png'} alt='profile' />
                    <Form onSubmit={(event)=>this.commentSubmit(event)}>
                        <FormGroup>
                            <Input
                            className='commentbox' type='textarea' name='comment' placeholder='share your opinion' value={this.state.value} onChange={this.handleChange} />
                        </FormGroup>
                        <Button type='submit' color='success'>Respond</Button>
                    </Form>
                </div>
                <RenderComments comments={this.props.comments} togglelike={this.props.togglelike}/>
            </div>
        )
    }
}

export default Comments;