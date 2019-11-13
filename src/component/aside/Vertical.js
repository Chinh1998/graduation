import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './vertical.css';


class Vertical extends Component{
    
      async componentDidMount() {
        const response = await fetch('/news');
        const body = await response.json();
        this.setState({ posts: body });
      }
     render() {
       return (
            <div className="vertical">
            <Link to="/it" className="btn btn-primary">Điện - Điện Tử</Link>
                
            </div>
           
        );

    }
}
export default Vertical;