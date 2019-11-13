import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../css/postnews.css';

class PostNews extends Component{
    constructor(props) {
        super(props);
        this.state={
         countViews:this.props.view
        }
       }
     render() {
        const { post } = this.props;
        if(post.approved=="1"){
        return (
            <div className="postnews">
                <img className="img_news" src={post.image} alt=""/>
                <div className="postnews_content">
                    <p><Link to={"/viewnews/"+post.id} className="title" >{post.title}</Link></p>
                    <p>{post.content}</p>
                </div>
            </div>
            );
        }
        return null;
    }  
 
}

export default PostNews;