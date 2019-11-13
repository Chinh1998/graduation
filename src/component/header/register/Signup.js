import React,{Component} from 'react';
import {Link} from'react-router-dom';
import  './signup.css'

class Signup extends Component{
    render(){
        return(
            <div >
                        <li className='register'><Link to="/register" className="btn btn-danger">ĐĂNG KÝ</Link></li>
                        <li className='login'><Link to="/login" className="btn btn-danger">ĐĂNG NHẬP</Link></li> 
                  </div>
        );
    }

}

export default Signup;