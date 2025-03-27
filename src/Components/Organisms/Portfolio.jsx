import styled from "styled-components";


import SideBar_Personal_Info from "../Molecules/SideBar_Personal_Info.jsx";
import Body_Menus from "../Molecules/Body_Menus.jsx";


const StyledStaticContent = styled.div`
    /* width: 58%; */
    border-radius: 30px;
    margin: 350px 15px 80px 15px;
    background-color: white;
    @media (max-width: 576px) {
        margin: 0px 20px 100px 20px;
    }
    @media only screen and (min-width: 768px) and (max-width: 992px) {
        width: 100%;
    }
`;

const Section = styled.div`
    display: flex;
    @media (max-width: 576px) {
        flex-direction: column;
        position: absolute;
    }
`;


function Portfolio ({ children }) {
    return (
        <>
          <Section>
              <SideBar_Personal_Info className="col-xl-3 col-lg-3 col-md-3 col-sm-12" />
            
                {/* Constant Content for Portfolio Page */}
                <StyledStaticContent className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                    { children }
                </StyledStaticContent>

                <Body_Menus className="desktop col-xl-1 col-lg-1 col-md-1 col-sm-12"/>
          </Section>
        </>
    );
}

export default Portfolio;