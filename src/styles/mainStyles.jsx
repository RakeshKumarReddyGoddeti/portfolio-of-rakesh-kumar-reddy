import './Header/header.css';
import "./ImageStyles/profile_photo.css";
import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../Images/body_background_image.jpg'; // Import the image


<>
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Poppins" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap" rel="stylesheet" />
</>




const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      background-image: url(${backgroundImage}); // Use the imported image
      background-position: inherit;
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
    }
    #root {
        margin: 0 auto;
        /* font-family: Arial, Helvetica, sans-serif; */
        font-family: 'Poppins', sans-serif;
        line-height: 1.5;
        height: 100%;
    }
    /* a, h1 {
        font-family: 'Roboto Slab', serif;
    } */
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Poppins', sans-serif;
    }
    p {
      letter-spacing: 1px;
    }
`;

export default GlobalStyle;