import React , {Component} from 'react';
import './Blogpage.css';
import Author from './Author';
import Blog from './Blog';
import Comments from './Comments';
import {useMediaQuery} from 'react-responsive';

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 769 })
    return isDesktop ? children : null
}

var htmlInput = '<div><p>William Shakespeare (bapt. 26 April 1564 – 23 April 1616)[a] was an English playwright, poet, and actor, widely regarded as the greatest writer in the English language and the worlds greatest dramatist.[2][3][4] He is often called Englands national poet and the "Bard of Avon" (or simply "the Bard").[5][b] His extant works, including collaborations, consist of some 39 plays,[c] 154 sonnets, two long narrative poems, and a few other verses, some of uncertain authorship. His plays have been translated into every major living language and are performed more often than those of any other playwright.[7] They also continue to be studied and reinterpreted. Shakespeare was born and raised in Stratford-upon-Avon, Warwickshire. At the age of 18, he married Anne Hathaway, with whom he had three children: Susanna and twins Hamnet and Judith. Sometime between 1585 and 1592, he began a successful career in London as an actor, writer, and part-owner of a playing company called the Lord Chamberlains Men, later known as the Kings Men. At age 49 (around 1613), he appears to have retired to Stratford, where he died three years later. Few records of Shakespeares private life survive; this has stimulated considerable speculation about such matters as his physical appearance, his sexuality, his religious beliefs, and whether the works attributed to him were written by others.[8][9][10].Shakespeare produced most of his known works between 1589 and 1613.[11][12][d] His early plays were primarily comedies and histories and are regarded as some of the best work produced in these genres. He then wrote mainly tragedies until 1608, among them Hamlet, Romeo and Juliet, Othello, King Lear, and Macbeth, all considered to be among the finest works in the English language.[2][3][4] In the last phase of his life, he wrote tragicomedies (also known as romances) and collaborated with other playwrights. Many of Shakespeares plays were published in editions of varying quality and accuracy in his lifetime. However, in 1623, two fellow actors and friends of Shakespeares, John Heminges and Henry Condell, published a more definitive text known as the First Folio, a posthumous collected edition of Shakespeares dramatic works that included all but two of his plays.[13] The volume was prefaced with a poem by Ben Jonson, in which Jonson presciently hailed Shakespeare in a now-famous quote as "not of an age, but for all time".[13]</p></div>';



class Blogdisplay extends Component {
    constructor(props){
        super(props);
        this.state={
            author:"lokesh",
            likes:10,
            comments:[],
            liked:false,
            following:true,
            bookmarked:false,
            dropdownopen:false,
            blog_html: htmlInput,
            showComments:false
        }
        this.togglelike=this.togglelike.bind(this);
        this.togglefollow=this.togglefollow.bind(this);
        this.togglebookmark=this.togglebookmark.bind(this);
        this.commentSubmit=this.commentSubmit.bind(this);
        this.togglecommentlike=this.togglecommentlike.bind(this);
        this.togglecomments=this.togglecomments.bind(this);
    }

    togglecomments(){
        this.setState({
            showComments:!(this.state.showComments)
        })
    }

    togglelike(){
        if(this.state.liked){
            this.setState({
                likes:this.state.likes-1
            })
        }
        else{
            this.setState({
                likes:this.state.likes+1
            })
        }
        this.setState({
            liked:!this.state.liked
        })   
    }

    togglecommentlike(comment){
        var items=[...this.state.comments];
        var item = {...items[comment.id]};
        item.liked=!(item.liked);
        if(comment.liked){
            item.likes-=1;    
        }
        else{
            item.likes+=1
        }

        items[comment.id]=item;
        this.setState({
            comments:items
        }) 
    }


    togglefollow(){
        this.setState({
            following:!this.state.following
        })
    }

    togglebookmark(){
        this.setState({
            bookmarked:!(this.state.bookmarked)
        })
    }

    commentSubmit(value){
        const newcomment = {
            id:this.state.comments.length,
            comment:value,
            author:{
                name:'lokesh',
                image:'#'
            },
            date: new Date(),
            likes:0,
            comments:[],
            liked:false
        };
        this.setState({
            comments:[...this.state.comments,newcomment],
        })
    }


    render(){
        return(
                <div className='row total'>
                    <Desktop><Author author={this.state.author} 
                    likes={this.state.likes} 
                    liked={this.state.liked}
                    togglelike={this.togglelike}
                    following={this.state.following}
                    togglefollow={this.togglefollow}
                    bookmarked={this.state.bookmarked}
                    togglebookmark={this.togglebookmark}
                    togglecomments={this.togglecomments}
                    /></Desktop>
                    <Blog author={this.state.author} 
                    likes={this.state.likes} 
                    liked={this.state.liked}
                    togglelike={this.togglelike}
                    following={this.state.following}
                    togglefollow={this.togglefollow}
                    bookmarked={this.state.bookmarked}
                    togglebookmark={this.togglebookmark}
                    blog_html={this.state.blog_html}
                    togglecomments={this.togglecomments}
                    />
                    {this.state.showComments &&(<Comments comments={this.state.comments} 
                    commentSubmit={this.commentSubmit}
                    togglelike={this.togglecommentlike}
                    showComments={this.state.showComments}
                    />)}
                </div>
        )
    }
}

export default Blogdisplay