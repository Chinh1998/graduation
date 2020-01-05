import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import eye from "./eye.png";
import '../css/postnews.css';
import ReactHtmlParser from 'react-html-parser';

class PostNews extends Component{
    render() {
        const { post } = this.props;
         if(post.approved===true){
        return (
            <div className="postnews">
                <Link to={"/viewnews/"+post.id}>
                <div className="view">
                    <img className="img_views" src={eye} alt=""/>
                    <p className="numberview">{post.view}</p>
                </div>
                <img className="img_news" src={post.image} alt=""/>
                <div className="postnews_content">
                    <Link to={"/viewnews/"+post.id} className="title"  >{post.title}</Link>
                    <p>{ReactHtmlParser( post.content)}</p>
                    </div>
                </Link>
            </div>
            );
        }
        return null;
    }  
}

export default PostNews;