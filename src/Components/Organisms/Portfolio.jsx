import styled from "styled-components";


import SideBar_Personal_Info from "../Molecules/SideBar_Personal_Info.jsx";
import Body_Menus from "../Molecules/Body_Menus.jsx";


const StyledStaticContent = styled.div`
    /* width: 65%; */
    border-radius: 30px;
    margin: 350px 20px 150px 20px;
    background-color: white;
    @media (max-width: 576px) {
        margin: 0px 20px 150px 20px;
    }
    @media only screen and (min-width: 768px) and (max-width: 992px) {
        width: fit-content;
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
              <SideBar_Personal_Info className="" />
            
              {/* Constant Content for Portfolio Page */}
              <StyledStaticContent className="">
                  { children }
              </StyledStaticContent>

              <Body_Menus className="desktop order-2"/>

          </Section>
        </>
    );
}

export default Portfolio;