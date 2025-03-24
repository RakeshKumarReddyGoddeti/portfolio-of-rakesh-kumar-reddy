import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { BiLogIn } from "react-icons/bi";


import styled from "styled-components";
import "../../styles/Header/header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import Button from "../Atoms/Button.jsx";
import Profile_Pic from "../Atoms/Profile_Pic.jsx";
import Body_Menus from "../Molecules/Body_Menus.jsx";


// Styled component for IoIosArrowDown
const StyledArrowDown = styled(IoIosArrowDown)`
  position: relative;
  bottom: 2px;
  font-size: 25px;
`;

// Styled component for IoIosArrowDown
const StyledLogin = styled(BiLogIn)`
  position: relative;
  color: white;
  font-size: 28px;
  bottom: 4px;
`;

function Header({ className }) {

    const [click, setClick] = useState(false);
    
    function handleClick() {
      setClick(!click);
    }

    return (
        <>
            <header className={`${className}`}>
              <div className="profile_pic">
                <Profile_Pic />
                <h2 className="logo_name">Rakesh Kumar Reddy</h2>
              </div>

              <div className="menus">
                <NavLink className="navlink">Home <span> <StyledArrowDown /> </span> </NavLink>
                <NavLink className="navlink">About <span> <StyledArrowDown /> </span> </NavLink>
                <NavLink className="navlink">Portfolio <span> <StyledArrowDown /> </span> </NavLink>
                <NavLink className="navlink">Pages <span> <StyledArrowDown /> </span> </NavLink>
                <NavLink className="navlink">Blog <span> <StyledArrowDown /> </span> </NavLink>
                <NavLink className="navlink">Contact </NavLink>
              </div>

              <div className="login">
                <Button className="button_contact_me"> Contact Me </Button>
                <Button className="button_contact_me"> Sign In <span><StyledLogin className="loginIcon" /></span> </Button>
              </div>

              <div className={`menu-btn toggle_menu ${click ? "active" : ""}`} onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className={`mobile_menu ${click ? "active" : ""}`}>
                <Body_Menus className="mobile d-block d-xl-none d-lg-none d-md-none"/>
              </div>
            </header>
        </>
    );
}

export default Header;