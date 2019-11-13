import React, {Component} from 'react';
import './header.css'
import Menu from './menu/Menu';
import logo from './logo.png';
import Signup from './register/Signup';

class Header extends Component{
    render(){
        return(
            <div className="header">
                <div className="logo_app">
                    <img alt="logo" to="/"  src={logo}/>
                </div>
                <div className="signup">
                    <Signup/>
                </div>
                <div className="nav">
                    <Menu/>
                </div>
            </div>
        );
    }
}

export default Header;