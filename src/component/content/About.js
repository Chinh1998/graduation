import React, { Component } from "react";
import './about.css'
class About extends Component{

    render(){
        return(
            <div class="about">
                <div className="about_content">
                    <h4>1. Khởi nghiệp là gì?</h4>
                    <p style={{textAlign:"justify"}}>
                        Khởi nghiệp tức là bạn đã ấp ủ một công việc kinh doanh riêng, thường thì bạn sẽ thành lập một doanh nghiệp mà tại đó bạn là người quản lý, là người sáng lập hoặc đồng sáng lập. Việc cung cấp những sản phẩm mới, dịch vụ mới hay thậm chí kinh doanh những mặt hàng đã có mặt trên thị trường nhưng theo ý tưởng có riêng mình... đều được gọi là khởi nghiệp.
                    </p>
                </div>
         </div>
        );
    }
}
export default About;