import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
import { BiLogoGmail } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { PiDownloadBold } from "react-icons/pi";

import about_rakesh_photo from "/Images/about_rakesh.jpg";
import Button from "../Atoms/Button";

import styled from "styled-components";
import "../../styles/Body/SideBar_Personal_Info.css";

const Img = styled.img`
    display: block;
    width: 70%;
    border-radius: 30px;
    margin: -200px auto 21px;
    @media (max-width: 576px) {
        width: 70%;
        height: auto;
        margin: -200px auto 5px auto;
    }
    /* @media (max-width: 992px) {
        width: 250px;
        height: 300px;
        margin: -220px auto 10px;
    } */

`


function SideBar_Personal_Info({ className }) {
    return (
          <div className={`sideBar_Personal_Info ${className}` }>
            <Img src={about_rakesh_photo} alt="Profile Photo"/>
            
            <div className="social_media">
              <h1> Rakesh Kumar Reddy </h1>
              <Button className="button_role"> Drupal Frontend Developer </Button>
              <div className="social_media_icons">
                <Button className="facebook"> <FaFacebookF /> </Button>
                <Button className="instagram"> <FaInstagram /> </Button>
                <Button className="linkedin"> <FaLinkedinIn /> </Button>
                <Button className="twitter"> <FaTwitter /> </Button>               
              </div>
            </div>


            <div className="personal_contact">

                <div className="main_personal_contact">
                  <Button className="icons phone"> <TbPhoneCall /> </Button>
                  <div className="text">
                    <span> Phone </span>
                    <p> +91 7981885700</p>
                  </div>
                </div>

                <div className="main_personal_contact">
                  <Button className="icons gmail"> <BiLogoGmail /> </Button>
                  <div className="text">
                    <span> Gmail </span>
                    <p className="gmailText"> rakeshkumarreddy.fedev@gmail.com </p>
                  </div>
                </div>

                <div className="main_personal_contact">
                  <Button className="icons location"> <FaLocationDot /> </Button>
                  <div className="text">
                    <span> Location </span>
                    <p> Pulivendula </p>
                  </div>
                </div>

                <div className="main_personal_contact">
                  <Button className="icons work"> <MdWork /> </Button>
                  <div className="text">
                    <span> Experiance </span>
                    <p> 2+ Years in Frontend </p>
                  </div>
                </div>

            </div>

            <Button className="download_cv">
              <span className="download"> <PiDownloadBold /> </span>
              <a href="#" target="_blank"> Download CV </a>
            </Button>
          </div>
    );
}

export default SideBar_Personal_Info;