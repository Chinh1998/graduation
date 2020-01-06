import React, {Component} from "react"
import people from "./microsoft-img.png"
import ls from 'local-storage'
import {Link} from 'react-router-dom'
import "./comment.css"
class Comment extends Component{
    isMine(){
        const {comment} = this.props;
        const me  = ls.get("user");
        return comment.user.id===me.id;
    }
   render(){
        const {comment} = this.props;
        return(
            <div className="comment">
                <div className="box_comment">
                    <img className="mancomment" src={people} alt="" />
                    <Link to={ "/users/"+comment.user.id} className="user">{comment.user.username}: {comment.user.position.name}</Link>
                </div>
                <div className="content_comment">
                    <div className="box">
                        {comment.content}
                    </div>
                {this.isMine()  && 
                    <div className="action">
                        <button className="btn btn-danger" onClick={this.props.deleteComment}>Xóa </button>
                </div>
                }
                </div>
            </div>
        );
    }
}
export default Comment;