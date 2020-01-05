import React, {Component} from 'react';

class PendingNews extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            posts:  [],
        }
    }
    componentDidMount() {
        this.getData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.pendingNewsId !== prevProps.pendingNewsId) {
            this.getData();
        }
    }

    isLoggedIn() {
        const token = localStorage.getItem("jwtToken");
        return token !== undefined && token !== null;
    }
    async getData(){
        const pendingNewsId = this.props.pendingNewsId;
        const viewNews = await fetch('/newspending/mypendingpost');
        const body = await viewNews.json();
        console.log(body);
        this.setState({
            loading: false,
            posts: body,
        });
    }

    render() {
        const {loading, posts} = this.state;
        if (loading) {
               return (
                   <p>Loading...</p>
               );
        } else {
            return (
                <div className="myprofile">
                  
                </div>
            );
        }
    }
   
}

export default PendingNews;