import React, {Component} from 'react';
import PostNews from '../PostNews';

class MajorNews extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            posts: [],
        }
    }
    async componentDidMount() {
        const majorId = this.props.match.params.majorId;
        console.log(majorId);
        const viewNews = await fetch('/major/'+majorId+"/news");
        const body = await viewNews.json();
        this.setState({
            loading: false,
            posts: body,
        });
    }
    render(){
        const { posts } = this.state;
        console.log(posts)
        return (
            <div className="post_app">
                {posts.map(post =>
                        <PostNews key={post.id} post={post}/>
                    )}

            </div>
        );
    }
    

}

export default MajorNews;