import React, {Component} from 'react';
import '../css/slide.css'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';



class Slide extends Component {
    constructor() {
        super();
        this.state = {
         posts: []
        };
      }
      
      async componentDidMount() {
        const response = await fetch('/news');
        const body = await response.json();
        this.setState({ posts: body });
      }
    render(){
        const { posts } = this.state;
        const post_image=posts.map(function name(params) {
            return params.image
        })
        return(
            <div className="slider">
                <Slider autoplay={2000}>
                    <img src={post_image[0]} alt=""/>
                    <img src={post_image[1]} alt=""/>
                </Slider>   
            </div>
        );

    }
}
export default Slide;