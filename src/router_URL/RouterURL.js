import React, { Component } from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import HomePage from "../page/HomePage";
import About from "../page/About";
import Register from "../component/header/register/Register";
import Personal from "../component/content/personal/Personal";
import News from "../component/news/News";
import CreatePost from "../component/content/personal/CreatePost";
import My_profile from "../component/content/personal/My_profile";
import Login from "../component/header/register/Login";
import AllNews from "../component/AllNews";
import MajorNews from "../component/news/MajorNews";
class RouterURL extends Component {
    render() {
     return(
        <div>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/about"  component={About}/>
                <Route path="/allnews" component={AllNews}/>
                <Route path="/major/:majorId" component={MajorNews}/>
                
                <Route path="/register" component={Register}/>
                <Route path="/login" component ={Login}/>

                <Route path="/my_profile" component={My_profile}/>
                <Route path="/users/60e8fb11-2668-43f3-8fca-3df0e560923a" component={Personal}/>
                <Route path="/viewnews/:newsId" component={News}/>
                <Route path="/news/post" component={CreatePost}/>
                <Route component={HomePage}/>
            </Switch>
        </div>
        );
    }
}

export default RouterURL;