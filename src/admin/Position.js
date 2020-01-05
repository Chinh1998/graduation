import React, {Component} from  "react";
import CreateMajors from "./CreateMajors";

class Position extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            positions: [],
        };
    }
    async componentDidMount() {
        const response = await fetch('/positions');
        const body = await response.json();
        this.setState({ positions: body });
      }
    render(){
        const {positions} = this.state
        return(
            <div className="position">
                <div className="header_approve"><h2 className="btn btn-secondary">
                    Danh Sách Chức Vụ</h2></div>
                {positions.map(position => <p key={Position.id}>
                    <label className="badge-primary">Tên chức vụ</label><label className="alert alert-primary">{position.name}</label></p>
                    )
                }
                </div>
        );
    }

}
export default Position;