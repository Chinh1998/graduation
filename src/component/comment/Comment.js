import React, {Component} from "react"
import people from "./microsoft-img.png"
import delte from "./delete.png"
import edit from "./Pencil.png"
import {Link} from 'react-router-dom'
import "./comment.css"
class Comment extends Component{
    render(){
        const {comment} = this.props;
        
        return(
            <div className="comment">
                <div className="box">
                    <div className="box_comment">
                        <img className="mancomment" src={people}/>  
                        <Link to="" className="user">{comment.user.username}</Link>
                        <h6>{comment.user.functionuser}</h6>
                    </div>
                    <div className="content_comment">{comment.content_cmt} </div>
                </div>
                <div className="action"> 
                    <img className="icon-delete" src={edit} onClick={this.enterEditMode}/>
                    <img className="icon-delete" src={delte} onClick={this.props.deleteComment}/>
                </div> 
                
            </div>
        );
    }
}
export default Comment;