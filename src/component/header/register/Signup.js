import React,{Component} from 'react';
import {Link} from'react-router-dom';
import people from "./microsoft-img.png"
import ls from 'local-storage'
import  './signup.css'

class Signup extends Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
         
    isLoggedIn() {
        const token = localStorage.getItem("jwtToken");
        return token !== undefined && token !== null;
    }

    onClick(){
        ls.remove('jwtToken');
        ls.remove('user');
        console.log(this.props);
        window.location.reload(true);
    }
    
    render() {
        if (this.isLoggedIn()) {
            const user=JSON.parse(localStorage.getItem('user'));
            return (
                <div>
                    <img className="people" src={people}></img>
                    <li className="menu-li"><Link to={"/users/"+user.id} className="showName" >{user.username}</Link>
                    <ul className="sub-menu">
                          <li><Link to="/logout" className="btn btn-primary" onClick={this.onClick}>Đăng Xuất</Link></li>
                          <li><Link to="/news/post" className="btn btn-primary">Tạo Bài Viết</Link></li>
                          <li><Link to="/my_profile" className="btn btn-primary" >Bài Viết Của Tôi</Link></li>
                      </ul>
                    </li>
                </div>
                );
            } else {
                return(
                    <div>
                        <li className='register'><Link to="/register" className="btn btn-danger">ĐĂNG KÝ</Link></li>
                        <li className='login'><Link to="/login" className="btn btn-danger">ĐĂNG NHẬP</Link></li> 
                    </div>
                );
            }
        }
    }

export default Signup;