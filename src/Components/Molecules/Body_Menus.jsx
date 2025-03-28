import { FaRegUser } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { PiStudentBold } from "react-icons/pi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";


import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../../styles/Body/Body_Menus.css";

const StyledUserIcon = styled(FaRegUser)`
  font-size: 28px;
  color: #44566c;
  margin-bottom: 5px;
`;

const StyledResumeIcon = styled(FiFileText)`
    font-size: 28px;
  color: #44566c;
  margin-bottom: 5px;
`;

const StyledEducationIcon = styled(PiStudentBold)`
    font-size: 28px;
  color: #44566c;
  margin-bottom: 5px;
`;

const StyledWorksIcon = styled(IoBriefcaseOutline)`
    font-size: 28px;
  color: #44566c;
  margin-bottom: 5px;
`;

const StyledContactIcon = styled(TiContacts)`
  font-size: 28px;
  color: #44566c;
  margin-bottom: 5px;
`;


function Body_Menus ({ className, onMobileMenuClick }) {
    return (
        <>
          <ul className={`Body_Menus ${className}`}>
            <li onClick= { () => onMobileMenuClick() } > <NavLink to="/home/about"> <span> <StyledUserIcon /> </span> About </NavLink> </li>
            <li onClick= { () => onMobileMenuClick() } > <NavLink to="/home/resume"> <span> <StyledResumeIcon /> </span> Resume </NavLink> </li>
            <li onClick= { () => onMobileMenuClick() } > <NavLink to="/home/education"> <span> <StyledEducationIcon /> </span> Education </NavLink> </li>
            <li onClick= { () => onMobileMenuClick() } > <NavLink to="/home/works"> <span> <StyledWorksIcon /> </span> Works </NavLink> </li>
            <li onClick= { () => onMobileMenuClick() } > <NavLink to="/home/contact"> <span> <StyledContactIcon /> </span> Contact </NavLink> </li>
          </ul>
        </>
    );
}

export default Body_Menus;