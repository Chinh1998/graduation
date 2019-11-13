import React, {Component} from 'react';
import Comment from '../comment/Comment';
import './news.css'
import AddComment from '../comment/AddComment';

class News extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            post: {},
            comments: []
        }
    }

    async componentDidMount() {
        const newsId = this.props.match.params.newsId;
        const viewNews = await fetch('/news/'+newsId);
        const body = await viewNews.json();
        const commentNews = await fetch('/news/'+newsId+'/comments');
        const comments = await commentNews.json();
        this.setState({
            loading: false,
            post: body,
            comments: comments
        });
    }

    render() {
        const {loading, post, comments} = this.state;
        if (loading) {
               return (
                   <p>Loading...</p>
               );
        } else {
            return (
                <div className="contentNew">
                    <div className="viewBox" >
                        <h3>{post.title}</h3>
                        <img src={post.image} alt="" />
                        
                        <p>{post.content}</p>
                    </div>
                    <div className="showComment">
                        <table className="table">
                            <tbody>
                                {comments.map(comment =>
                                    <Comment key={comment.id} comment={comment} deleteComment={() => this.deleteComment(comment.id)}/>
                                )}
                            </tbody>
                        </table>
                    </div>
                    
                    <AddComment postId={post.id} updateComment={() => this.updateComment()}/>
                </div>
            );
        }
    }
    async updateComment() {
        const newsId = this.props.match.params.newsId;
        const commentNews = await fetch('/news/'+newsId+'/comments');
        const comments = await commentNews.json();
        this.setState({
            comments: comments
        });
      }

      //--------------------------------
      async deleteComment(commentId) {
        // SEND AJAX "/news/"+ postID

        const requestOptions = {
            method: 'DELETE'
          };
         await fetch("/cmt/" + commentId, requestOptions);
        const newsId = this.props.match.params.newsId;
        const commentNews = await fetch('/news/'+newsId+'/comments');
        const comments = await commentNews.json();
        this.setState({
            comments: comments
        });
    }
}

export default News;