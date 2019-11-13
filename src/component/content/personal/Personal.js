import React, {Component} from 'react';


class Personal extends Component{
    constructor(){
      super();
      this.state = {
        posts: []
       };
    }
    async componentDidMount() {
    const response = await fetch('/users/60e8fb11-2668-43f3-8fca-3df0e560923a');
    const body = await response.json();
    this.setState({ posts: body });
  }
render(){
    const { user} = this.state;
    return(
        <div class="personal">
          <h4>{user.name}</h4>
            
        </div>
    );
}
}
export default Personal;