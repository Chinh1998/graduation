import React, { Component } from "react";
import {Link} from "react-router-dom" 
import './newsrow.css'

class NewsRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
    }

    render() {
        const { isEditing } = this.state;
        if (isEditing) {
            return (
                <tr>
                    <td><input type="text"/></td>
                    <td><input type="text"/></td>
                    <td><input type="text"/></td>
                    <td>
                        <button onClick={this.exitEditMode}>Cancel</button>
                    </td>
                </tr>
            );
        }

        const { post } = this.props;
        return (
            <tr>
                <td><img alt="myimage" className="imgtbnews" src={post.image}></img></td>
                <td><Link to={"/viewnews/"+post.id} className="title" >{post.title}</Link></td>
                <td>{post.content}...</td>
                <td>
                    <button onClick={this.enterEditMode} className="btn btn-primary">Edit</button>
                    <button onClick={this.props.deleteNews} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }

    enterEditMode = () => {
        this.setState({
            isEditing: true
        });
    }

    exitEditMode = () => {
        this.setState({
            isEditing: false
        })
    }
}

export default NewsRow;