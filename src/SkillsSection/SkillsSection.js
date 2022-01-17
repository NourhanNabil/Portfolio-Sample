import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './SkillsSection.css';
class SkillsSection extends React.Component {
    constructor() {
        super();   
    }

    render() {

        let Skills = [ 
            {name:"HTML",percentage:60},
            {name:"CSS",percentage:70},
            {name:"JavaScript",percentage:50},
            {name:"React",percentage:30},
            {name:"Linux",percentage:20},
            {name:"BashScript",percentage:80},
            {name:"postgres",percentage:90}
             ]
        return ( 
            <>
            <div className="bg-dark text-center">
                <div className="container text-light ">
                <h2 className="text-capitalize pt-4 ">skills</h2> 
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit provident quae aliquid nemo libero ex repellendus, eos quaerat expedita ut animi tempora in deserunt explicabo harum quam consectetur, ratione doloremque dolores ab quasi? Vel iusto, reprehenderit qui similique libero aut voluptas eos amet enim perspiciatis in consectetur voluptatum numquam sint?</p>
                    <div className="row">
                        <div className="col-3 offset-2" >
                            <h3 className="text-uppercase pb-2 border-bottom">my focus</h3>
                             <p className="text-capitalize">UI/UK design</p>
                             <p className="text-capitalize">responsive design</p>
                             <p className="text-capitalize">web design </p>
                             <p className="text-capitalize">mobile app design</p>
                        </div>
                        <div className="col-6 m-auto p-4" >
                        {Skills.map((item,index) => {
                        return (
                            <div key={index}className="progress mt-2">
                                <div 
                                    className="progress-bar bg-secondary"
                                    role="progressbar"
                                    style={{ width:`${item.percentage}%` }}
                                    aria-valuenow={item.percentage}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ><span key={index}>{item.name}</span></div>
                            </div>
                        )
                         })}
                        </div>
                    </div> 
                </div>
            </div>
            </>
        );
    }
}

export default SkillsSection;
