import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './HeadSection.css';
import PortfolioImage from './5-MIND-BLOWING-Portfolio-TIPS-Graphic-Design.jpg';
class HeadSection extends React.Component {
    constructor() {
        super();
    }

    render() {
        return ( 
            <>
            <div className="card bg-dark text-white text-center">
                <img src={PortfolioImage} className="card-img" height="300px" alt="PortfolioImage"/>
                    <div className="card-img-overlay">
                        <h1 className="text-dark text-capitalize"> nourhan nabil </h1>
                        <h5 className="text-dark text-capitalize"> full stack developer </h5>
                    </div>
            </div>
            </>
    );
}
}

export default HeadSection;
