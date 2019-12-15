import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './aside.css';

class Aside extends Component{
    render(){
        return(
            <div className="aside">
               <Link to="/it" className="btn btn-primary">Được Xem Nhiều Nhất</Link>
            </div>
        );
    }

}

export default Aside;