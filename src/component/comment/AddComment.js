import React, { Component } from "react";
import './addComment.css';

class AddComment extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async handleSubmit(event) {
        event.preventDefault();
        const data = {
            "content_cmt": this.content.value,
            "userId": "1c1acae6-1c75-4861-ac8f-621eaf523c46",
            "newsId": this.props.postId
        }
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
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
                <form onSubmit={this.handleSubmit}>
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