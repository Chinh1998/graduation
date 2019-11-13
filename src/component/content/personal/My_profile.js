import React, {Component} from 'react';
import PostsTable from './PostsTable';

class My_profile extends Component{
  constructor() {
    super();
    this.state = {
      isLoading: true,
      posts: []
    };
  }
  
  async componentDidMount() {
    const response = await fetch('/news');
    const body = await response.json();
    this.setState({ posts: body, isLoading: false });
  }
render(){
    const { posts, isLoading } = this.state;
  
    if (isLoading) {
      return <p>Loading...</p>;
}
    return(
        <div className="myprofile">
          
            <PostsTable posts={posts}/>
        </div>
    );
}
}
export default My_profile;