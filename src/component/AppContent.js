import React, { Component } from "react";
import Header from "./header/Header";
import Vertical from "./aside/Vertical";
import RouterURL from "../router_URL/RouterURL";
import Footer from "./footer/Footer";

class AppContent extends Component{

    render(){
        return (
            <div className="App">
            <Header history={this.props.history}/>
            <div className="section">
                <div>
                    <Vertical/>
                </div>
                <div className="Container">
                    <RouterURL/>
                </div>
            </div>
            <div className="footer" >
                <Footer/>
            </div>
        </div>
        )
    }
}

export default AppContent;