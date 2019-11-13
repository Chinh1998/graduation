import React, { Component } from 'react';
import './homepage.css';
import '../bootstrap.min.css';
import Aside from '../component/aside/Aside';
import Content from '../component/content/Content';


class HomePage extends Component {
    render() {
       return (
          <div className="homepage">
            <div>
              <Content/>
            </div>
              <div >
              <Aside/>
              </div>
          </div>
  );
}
}

export default HomePage;
