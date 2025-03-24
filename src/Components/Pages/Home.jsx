import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "../Organisms/Header.jsx"
import Portfolio from "../Organisms/Portfolio.jsx";

function Home(){
    return(
        <body>
          <Header className="" />
          <Portfolio > <Outlet /> </Portfolio>
        </body>
    );
}

export default Home;