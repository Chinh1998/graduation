import React, { Component } from "react";
import './PostsTable.css';
import NewsRow from "./NewsRow";


class PostsTable extends Component {

    constructor(props) {
        super(props);
        const { posts } = this.props;
        this.state = {
            posts: posts
        }
    }

    render() {
        const { posts } = this.state;
        return (
            <center>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Post Image</th>
                        <th scope="col">Post Title</th>
                        <th scope="col">Post Content</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post =>
                        <NewsRow key={post.id} post={post} deleteNews={() => this.deleteNews(post.id)}/>
                    )}
                </tbody>
            </table>
            </center>
        );
    }

   async deleteNews(postId) {
        console.log('Deleting news: ' + postId);
        // SEND AJAX "/news/"+ postID

        const requestOptions = {
            method: 'DELETE'
          };
         await fetch("/news/" + postId, requestOptions).then((response) => {
            return response.json();
          }).then((result) => {
            
            const { posts } = this.state;
            const newPosts = posts.filter(function(post) {
                return post.id !== postId;
            });

            this.setState({
                posts: newPosts
            });
          });
    }
}

export default PostsTable;