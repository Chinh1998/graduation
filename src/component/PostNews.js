import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../css/postnews.css';

class PostNews extends Component{
    constructor(props) {
        super(props);
       }
     render() {
        const { post } = this.props;
        if(post.approved=="1"){
        return (
            <div className="postnews">
                <img className="img_news" src={post.image} alt=""/>
                <div className="postnews_content">
                    <button className="link"><Link to={"/viewnews/"+post.id} className="title"  >{post.title}</Link></button>
                    <p>{post.content}</p>
                    </div>
            </div>
            );
        }
        return null;
    }  
    countViews(postId){
        console.log( postId);
        const { post } = this.props;
        console.log(post.view +1)
    }
        
    }

export default PostNews;