import React, { Component } from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import './App.css';
import './bootstrap.min.css';
import RouterURL from './router_URL/RouterURL';
import Vertical from './component/aside/Vertical';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
            <Header/>
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
      </Router>
    );
}
}

export default App;
