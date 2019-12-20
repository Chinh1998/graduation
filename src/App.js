import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import './App.css';
import './bootstrap.min.css';
import HomePage from './page/HomePage';
import LoginPage from './page/LoginPage';
import About from './page/AboutPage';
import MajorNewsPage from './page/MajorNewsPage';
import RegisterPage from './page/RegisterPage';
import MyProfilePage from './page/MyProfilePage';
import PersonalPage from './page/PersonalPage';
import NewsPage from './page/NewsPage';
import CreatePostPage from './page/CreatePostPage';
import LawPage from './page/LawPage';

class App extends Component {
  render(){
    return (
      <Router>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/about" component={About}/>
            <Route path="/major/:majorId" component={MajorNewsPage}/>
            <Route path="/register" component={RegisterPage}/>
            <Route path="/my_profile" component={MyProfilePage}/>
            <Route path="/users/:userId" component={PersonalPage}/>
            <Route path="/viewnews/:newsId" component={NewsPage}/>
            <Route path="/news/post" component={CreatePostPage}/>
            <Route path="/law" component ={LawPage}/>
            <Route component={HomePage}/>
        </Switch>
      </Router>
    );
}
}

export default App;
