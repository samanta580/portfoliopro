import React, { useState } from "react";
import axios from "axios";
import imgBack from "../../../src/contactme/Onelinked-Website-Contact-Us-Background.png";
import Toast from "react-bootstrap/Toast";
import Fade from "react-bootstrap/Fade";

//import ToastContainer from 'react-bootstrap/ToastContainer';
//import ToastContainer from 'react-bootstrap/ToastContainer';

import {
  FaHandshake,
  FaInstagram,
  FaGooglePlusSquare,
  FaYoutubeSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaRegEnvelope,
} from "react-icons/fa";
import Spiner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ScreenHeader } from "../../utilities/ScreeenHeader/SCreenHeader";
import "./contactme.css";
export const ContactMe = (props) => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [bool, setBool] = useState();
  const [banner, setBanner] = useState("");
  const [showToast, setShowToast] = useState(false);
  const toggleShowToast = (bool) => setShowToast(bool);

  const handleContact = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      setBool(true);
      console.log(contact);
      const res = await axios.post(
        '/contact',
        contact
      );
      if (
        contact.name.length === 0 ||
        contact.message.length === 0 ||
        contact.email.length === 0
      ) {
        setBanner(res.data.message);
        toggleShowToast(true);
        // *****************************************************************************88888***********
        // setContact({name:"",email:"",message:""})
      }
    } catch (error) {
      console.log(error);
    }
  };
  const Errors = () => {
    return (
      <Toast transition={Fade} delay="6000" animation="true" bg="dark" show={showToast} onClose={() => toggleShowToast(false)} autohide>
        <Toast.Header>
        
          <strong className="me-auto">Warning!</strong>
          <small className="text-muted">1 secend ago</small>
        </Toast.Header>
        <Toast.Body className={  'text-white'}> Woohoo, Pelese Fill All Fields!</Toast.Body>
      </Toast>
    );
  };
  return (
    <div className="col-lg-12 main-container" id={props.id || ""}>
      <ScreenHeader subHeading={"Let's Keep In Touch"} title={"ContactMe"} />
      <div className="central-form">
        <div className="colm">
          <h2 className="title">
            {" "}
            Get In Touch{" "}
            {/* <span className="span-icon">
              {" "}
              <FaRegEnvelope className="ico" />{" "}
            </span>{" "} */}
          </h2>

          <a href="https://www.linkedin.com/in/samaneh-azhar/">
            <FaLinkedin className="icon" />
          </a>

          <a href="#/">
            <FaGooglePlusSquare className="icon" />
          </a>

          <a href="#/">
            <FaInstagram className="icon" />
          </a>

          <a href="#/">
            <FaYoutubeSquare className="icon" />
          </a>

          <a href="#/">
            <FaTwitterSquare className="icon" />
          </a>

          
           </div>
       
        <div className="back-form">
          <div className="img-back ">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="No Internet Connection!" />
          </div>
        
          
        <div className="toastclass">
          {Errors()}
          </div>
          
          
          <form onSubmit={submitForm}>
            <p>{contact.banner} </p>

            <label htmlFor="name">Name<em className="iclass">*</em>: </label>
            <input
              type="text"
              name="name"
              onChange={handleContact}
              value={contact.name}
              placeholder="Your name.."
            />

            <label htmlFor="email">Email<em className="iclass">*</em>:</label>
            <input
              type="email"
              onChange={handleContact}
              value={contact.email}
              name="email"
              placeholder="Your email.."
            />
            <label>Messsage<em className="iclass">*</em>:</label>
            <textarea
              type="text"
              onChange={handleContact}
              value={contact.message}
              name="message"
              placeholder="Write something.."
            />

            <div className="send-btn">
              <button type="submit">
                send <i className="fa fa-paper-plane" />
              </button>
            </div>
          </form>
         
        </div>
      </div>
    </div>
  );
};
//    <Spiner animation='grow' variant='secondary' size="sm"/>
//         <Spiner animation='grow' variant='secondary'size="sm"/>
//         <Spiner animation='grow' variant='secondary'size="sm"/>
