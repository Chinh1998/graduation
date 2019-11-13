import React, {Component} from 'react';
import './register.css'
class Register extends Component{
    constructor(props){
        super(props);
        this.register=this.register.bind(this)
     }
    async register(event){
        event.preventDefault();
        const data= {
            "username": this.username.value,
            "mail": this.email.value,
            "password": this.password.value,
            "nbphone": this.numberphone.value,
            }
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data)
          };
            await fetch('/users/register',requestOptions);
        }
    render(){
        return(
            <div class="regis_form">
            <form onSubmit={this.register}>
                <fieldset>
                    <legend>Đăng Kí Tài Khoản</legend>
                    <label for="myEmail">User Name</label>
                    <input class="form-control" ref={(ref) => {this.username = ref}} placeholder="User Name" size="30" />
                    <label for="myEmail">Email</label>
                    <input type="email" ref={(ref) => {this.email = ref}} class="form-control"  placeholder="Email"/>
                    <label for="myPassword">Password</label>
                    <input type="password" ref={(ref) => {this.password = ref}} class="form-control"  placeholder="Password" />
                    <label for="inputNumberphone">Numberphone</label>
                    <input type="number" ref={(ref) => {this.numberphone = ref}} class="form-control"  placeholder="032333435367" />
                    <label for="myState">State</label>
                    <select id="myState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select><br></br>
                    <button type="submit" class="btn btn-danger">Sign in</button>
                </fieldset>
            </form>
        </div>
    
        );
    }
}

export default Register