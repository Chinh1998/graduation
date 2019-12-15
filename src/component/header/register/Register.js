import React, {Component} from 'react';
import './register.css'
class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
           username:"",
           password:"",
           mail:"",
           phone:"",
           functionuser:""
            };
        this.onChange = this.onChange.bind(this)
        this.register=this.register.bind(this)
     }
     onChange(e) {
        this.setState({
            [e.target.name]:e.target.value
        })
       }
    async register(event){
       event.preventDefault();
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(this.state)
          };
    const reponse= await fetch('/users/register',requestOptions);
    if(reponse.ok){
        alert("Đăng kí thành công");
        this.props.history.push('/login');
    }
        }
    render(){
        return(
            <div className="regis_form">
            <form onSubmit={this.register}>
                <fieldset>
                    <legend>Đăng Kí Tài Khoản</legend>
                    <label htmlFor="myEmail">Tên Đăng Nhập</label>
                    <input className="form-control" name="username" placeholder="User Name" onChange={this.onChange} />
                    <label htmlFor="myEmail">Email</label>
                    <input type="email" name="mail" className="form-control"  placeholder="Email" onChange={this.onChange}/>
                    <label htmlFor="myPassword">Mật Khẩu</label>
                    <input type="password" name="password" className="form-control"  placeholder="Password" onChange={this.onChange}/>
                    <label htmlFor="inputNumberphone">Số Điện Thoại</label>
                    <input type="number" name="phone" className="form-control"  placeholder="0321123321" onChange={this.onChange}/>
                    <label htmlFor="myState">Chức Danh</label>
                    <select name="functionuser" onChange={this.onChange} defaultValue="5"
                        className="form-control">
                            <option >Thành Viên</option>
                            <option >Cố Vấn</option>
                            <option >Nhà Đầu Tư</option>
                            <option >Nhà Gọi Vốn</option>
                            <option  value="5" hidden>Chọn Chức Danh</option>
                            </select><br></br>
                    <button type="submit" className="btn btn-danger">Sign in</button><br></br>
                </fieldset>
            </form>
        </div>
    
        );
    }
}

export default Register