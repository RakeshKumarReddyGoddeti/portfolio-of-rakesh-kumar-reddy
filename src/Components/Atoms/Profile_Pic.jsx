import styled from "styled-components";
import "../../styles/mainStyles.jsx";

import profile_photo from '../../Images/profile_photo.jpg';

const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`

function Profile_Pic() {
    return (
        <Img src={profile_photo} alt="Profile Photo"/>
    );
}

export default Profile_Pic;