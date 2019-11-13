import React, {Component} from 'react';
import './login.css'
class Login extends Component{

    render(){
        return(
            <div class="regis_form">
            <form>
                <fieldset>
                    <legend>Login</legend>
                    <label for="myEmail">User Name</label>
                    <input class="form-control" ref={(ref) => {this.username = ref}} placeholder="User Name" size="30" />
                    <label for="myPassword">Password</label>
                    <input type="password" ref={(ref) => {this.password = ref}} class="form-control"  placeholder="Password" />
                    <button type="submit" class="btn btn-info">Login</button>
                </fieldset>
            </form>
        </div>
    
        );
    }
}

export default Login