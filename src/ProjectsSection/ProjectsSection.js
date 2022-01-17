import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './ProjectsSection.css';
class ProjectsSection extends React.Component {
    constructor() {
        super();
    }

    render() {
        let projects=["web deign", "mobil design", "logo design", "web application development", "mobile application development" , "pwa development" ]
        return ( 
            <>     
                <h2 className="text-capitalize m-5">portfolio</h2>
                <div className="container portcards">
                    {projects.map((item,index)=>{
                        return(
                        <div key={index} className="text-uppercase col-3 m-3 ">
                                <div className="card text-center  ">
                                    <div className="card-body">
                                        <h5 className="card-title pb-2  border-bottom">{item}</h5>
                                        <a href="#" className="btn btn-primary">click</a>
                                    </div>
                            </div>
                        </div>
                        );
                    }
                    )}


                
            </div>
            </>
        );
    }
}

export default ProjectsSection;
