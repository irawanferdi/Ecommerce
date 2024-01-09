import React from "react";
import './DescriptionBox.css'


const DecriptionBox = () => {
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description </div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>

            <div className="descriptionbox-description">
                <p>E-commerce (electronic commerce) is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet. These e-commerce transactions typically fall within four types: business-to-business (B2B), business-to-consumer (B2C), consumer-to-consumer or consumer-to-business.
                The terms e-commerce and e-business are often used interchangeably. The term e-tail is also sometimes used in reference to the transactional processes that make up online retail shopping.
                </p>
            </div>
        </div>
    )
}

export default DecriptionBox;