import React, {Component} from 'react';
import PostNews from '../PostNews';

class MajorNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            posts: [],
        }
    }

    componentDidMount() {
        this.getData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.majorId !== prevProps.match.params.majorId) {
            this.getData();
        }
    }

    async getData() {
        const majorId = this.props.match.params.majorId;
        const viewNews = await fetch('/major/'+majorId+"/news");
        const body = await viewNews.json();
        this.setState({
            loading: false,
            posts: body,
        });
    }

    render(){
        const { posts } = this.state;
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