import React, {Component} from  "react"
import ls from 'local-storage'
import "./createpost.css"

class CreatePost extends Component{
    constructor(props){
        super(props);
        this.state = {
            majors: [],
            value:{}
            };
        
         this.createPost=this.createPost.bind(this)
        }
      onChange(ev) {
            this.setState({value: ev.target.value});
           }
     async createPost(event){
        const token = ls.get('jwtToken');
        event.preventDefault();
        const data= {
            "title": this.title.value,
            "image": "/image/slide2.png",
            "content": this.content.value,
            "view": 0,
            "majors_id": this.state.value,
            "approved": "true"
            
        }
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                'Authorization': "Bearer " + token
            },
            body: JSON.stringify(data)
          };
           const response= await fetch('/news/create', requestOptions);
           if(response.ok){
               const result = await response.json();
               this.props.history.push('/viewnews/'+result.id);
           }
           
    }
    async componentDidMount() {
        const response = await fetch('/major');
        const body = await response.json();
        this.setState({ majors: body });
        console.log(JSON.parse(localStorage.getItem('jwtToken')));
      }
    render(){
        const {majors} = this.state
        return(
            <div>
                <div className="createpost_form">
                    <form onSubmit={this.createPost}>
                        <fieldset>
                            <legend>TẠO BÀI VIẾT</legend>
                                <label>Tiêu đề</label>
                                <input ref={(ref) => {this.title = ref}} type="text" name="title" className="form-control"/>
                                <label >Chuyên Ngành</label>
                                    <select value={this.state.value} onChange={this.onChange.bind(this) }
                                        className="form-control">
                                            <option value=""selected hidden>Chọn Ngành</option>
                                            {majors.map(major => <option value={major.id} key={major.id} >{major.name}</option>)}
                                        
                                    </select>
                                <label>Hình ảnh</label>
                                <button type="button" name="image" className="btn btn-info btn-lg btn-block">Get_Image</button>
                                <label>Nội dung</label>
                                <textarea ref={(ref) => {this.content = ref}} className="form-control" rows="10" id="comment"></textarea><br></br>
                            <button type="submit" className="btn btn-danger"style={{float:"right",width:"20%"}}>Create</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }

}
export default CreatePost;