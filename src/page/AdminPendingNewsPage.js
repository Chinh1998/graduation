import React, { Component } from "react";
import Footer from "../component/footer/Footer";
import PendingNews from "../admin/PendingNews";

class AdminPendingNewsPage extends Component{
    render(){
      const pendingNewsId = this.props.match.params.pendingNewsId;
        return(
          <div className="App">
            <div className="Container">
                <PendingNews pendingNewsId={pendingNewsId} history={this.props.history}/>
            </div>
            <div className="footer" >
                <Footer/>
            </div>
          </div>
        );
    }
}
export default AdminPendingNewsPage;