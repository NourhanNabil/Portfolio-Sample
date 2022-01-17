import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './BioSection.css';
class BioSection extends React.Component {
    constructor() {
        super();
    }

    render() {
        return ( 
            <>
            <div className="container">
            <div className = "row">
             <h2 className = "col-5 m-auto text-center"  > ABOUT ME </h2> 
                <div className = " text-left col-7 mt-5 mb-5 " >
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed ex purus, consectetur at odio eget, tempus placerat libero.Aenean quis mauris risus.Cras dolor elit, vestibulum vitae libero vitae, facilisis mollis metus.Praesent sed est ac orci volutpat sodales imperdiet efficitur justo.Integer quis mauris mauris.Aenean et ornare ipsum.Sed aliquam porttitor odio, sed pellentesque massa sollicitudin in .Ut pellentesque urna libero, in consectetur nisl faucibus faucibus.Phasellus ex tortor, efficitur sed turpis vel.</p>
                   <a href="https://drive.google.com/uc?export=download&id=1C9MIanejxGLOtwHpZjnf_gOfxCvJ5cTT" download={"Nourhan-Nabil-Resume"}>< button type = "button" className="btn btn-secondary"> DOWNLOAD RESUME </button></a> 
                </div>
             </div> 

            </div>
             </>
        );
    }
}

export default BioSection;
