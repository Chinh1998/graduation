import React, { Component } from "react";
import ls from 'local-storage';
import './addComment.css';

class AddComment extends Component {
    constructor(props) {
        super(props);
        this.Submit = this.Submit.bind(this);
    }
    async Submit(event) {
        const user = ls.get('user');
        event.preventDefault();
        const data = {
            "content_cmt": this.content.value,
            "userId": user.id,
            "newsId": this.props.postId
        }
        
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        };
        await fetch('/cmt', requestOptions).then((response) => {
            return response.json();
        }).then((result) => {
            this.props.updateComment()
        });
        this.content.value = "";
    }
    render(){
        
        return(
            <div className="addComment">
                <form onSubmit={this.Submit}>
                    <div className="form-group">
                        <textarea ref={(ref)=> {this.content = ref}} className="form-control" rows="3" id="comment" name="content_cmt"></textarea>
                        <button type="submit" className="btn btn-primary" style={{float: "right"}}>Post Comment</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddComment;