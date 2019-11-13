import React, {Component} from "react";
import "./comment.css"
class Comment extends Component{
    render(){
        const {comment} = this.props;
        return(
            <tr>
                <td className="content_comment">{comment.content_cmt}</td>
                <td className="action">
                    <button onClick={this.enterEditMode} className="btn btn-primary btn-xs" >
                        Edit  
                    </button>
                    <button onClick={this.props.deleteComment}  className="btn btn-danger btn-xs">Delete</button>
                </td>
                </tr>
        );
    }
}
export default Comment;