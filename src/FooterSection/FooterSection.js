import React from "react"; 
import 'bootstrap/dist/css/bootstrap.css'; 
import './FooterSection.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faCodepen,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";            
class FooterSection extends React.Component {
    constructor() {
        super();
       }
    render()
    {
        return ( 
        <>
            <footer className="bg-dark text-light text-center p-2">
                <div className="row m-auto ">
                    <div className="col-lg-4 m-auto col-sm-12 ">
                            <h6 className="text-uppercase">get in touch</h6>
                            <FontAwesomeIcon icon={faEnvelope}/>
                            <p>nourhan.nabill@outlook.com</p> 
                            <FontAwesomeIcon icon={faPhoneSquare} />
                            <p>+201277760657</p> 
                    </div>
                    <div className="col-lg-4 col-sm-12   m-auto">
                        <button type="button" className=" btn text-light text-uppercase bg-transparent border border-white rounded-0">contact me</button>
                    </div>
                        <div className="col-lg-4 col-sm-12  m-auto">
                            <a className="link" href="https://github.com/NourhanNabil" target="_blank" ><FontAwesomeIcon className="m-4 fs-3" icon={faGithub} /></a>
                            <a className="link" href="https://codepen.io/nourhannabil" target="_blank"><FontAwesomeIcon className="m-4 fs-3" icon={faCodepen} /></a>
                            <a className="link" href="https://www.linkedin.com/in/nourhan-nabill/" target="_blank"><FontAwesomeIcon className="m-4 fs-3" icon={faLinkedin} /></a>
                            <p>copyright &copy; 2022 </p>
                       </div>
                </div>
            </footer>     
      </>
        );
    }
}

export default FooterSection;
