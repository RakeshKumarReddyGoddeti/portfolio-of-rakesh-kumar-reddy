import { GrAchievement } from "react-icons/gr";
import { GrReactjs } from "react-icons/gr";
import { DiJqueryUiLogo } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaDrupal } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/Body/works.css";

import Button from "../Atoms/Button";

const StyledSkillsIcon = styled(GrAchievement)`
  font-size: 45px;
  position: relative;
  bottom: 8px;
  margin: 0 15px 15px 0;
  color: rgb(28, 156, 234);
`;

const StyledReactIcon = styled(GrReactjs)`
  font-size: 4rem;
  color: #06b6d4;
  @media (max-width: 576px) {
    font-size: 3.5rem;
  }
`;

const StyledjQueryIcon = styled(DiJqueryUiLogo)`
  font-size: 4rem;
  color: rgb(79, 129, 189);
  @media (max-width: 576px) {
    font-size: 4.5rem;
  }
`;


const StyledJavaScriptIcon = styled(TbBrandJavascript)`
  font-size: 4.5rem;
  color: #f0db4f;
  @media (max-width: 576px) {
    font-size: 3.5rem;
  }
`;

const StyledBootstrapIcon = styled(FaBootstrap)`
  font-size: 4.5rem;
  color: #563d7c;
  @media (max-width: 576px) {
    font-size: 3.5rem;
  }
`;

const StyledTailwindCSSIcon = styled(RiTailwindCssFill)`
  font-size: 4rem;
  color: oklch(.746 .16 232.661);
  @media (max-width: 576px) {
    font-size: 3.5rem;
  }
`;

const StyledSASSIcon = styled(FaSass)`
  font-size: 4rem;
  color: #CD6799;
  @media (max-width: 576px) {
    font-size: 3.5rem;
  }
`;

const StyledGitIcon = styled(FaGitAlt)`
  font-size: 4rem;
  color: #F1502F;
  @media (max-width: 576px) {
    font-size: 3.5rem;
  }
`;

const StyledDrupal10Icon = styled(FaDrupal)`
  font-size: 4rem;
  color: #066baa;
  @media (max-width: 576px) {
    font-size: 3.5rem;
  }
`;

const StyledCoreJavaIcon = styled(FaJava)`
  font-size: 4rem;
  color: #066baa;
  @media (max-width: 576px) {
    font-size: 3.5rem;
  }
`;

function Skills() {
    return (
        <div className="works_column">

                <h2> <span> <StyledSkillsIcon /> </span> Skills </h2>
                <ol className="row">
                    <li className="col-lg-6">
                       <Button className="button_react_js">
                          <div className="skill_range">
                            <h3> <span className="icon"> <StyledReactIcon /> </span> React JS </h3>
                            <h3> 80 % </h3>
                          </div>

                          <input type="range" id="points" name="points" min="0" max="100" value="80"></input>
                       </Button>
                    </li>

                    <li className="col-lg-6">
                       <Button className="button_jQuery">
                          <div className="skill_range">
                            <h3> <span className="icon"> <StyledjQueryIcon /> </span> jQuery </h3>
                            <h3> 95 % </h3>
                          </div>

                          <input type="range" id="points" name="points" min="0" max="100" value="95"></input>
                       </Button>
                    </li>

                    <li className="col-lg-6">
                       <Button className="button_javaScript">
                          <div className="skill_range">
                            <h3> <span className="icon"> <StyledJavaScriptIcon /> </span> Java Script </h3>
                            <h3> 80 % </h3>
                          </div>

                          <input type="range" id="points" name="points" min="0" max="100" value="80"></input>
                       </Button>
                    </li>

                    <li className="col-lg-6">
                       <Button className="button_bootstrap">
                          <div className="skill_range">
                            <h3> <span className="icon"> <StyledBootstrapIcon /> </span> Bootstrap </h3>
                            <h3> 75 % </h3>
                          </div>

                          <input type="range" id="points" name="points" min="0" max="100" value="75"></input>
                       </Button>
                    </li>

                    <li className="col-lg-6">
                       <Button className="button_tailwind_css">
                          <div className="skill_range">
                            <h3> <span className="icon"> <StyledTailwindCSSIcon /> </span> Tailwind CSS </h3>
                            <h3> 65 % </h3>
                          </div>

                          <input type="range" id="points" name="points" min="0" max="100" value="65"></input>
                       </Button>
                    </li>

                    <li className="col-lg-6">
                       <Button className="button_sass">
                          <div className="skill_range">
                            <h3> <span className="icon"> <StyledSASSIcon /> </span> SASS </h3>
                            <h3> 95 % </h3>
                          </div>

                          <input type="range" id="points" name="points" min="0" max="100" value="95"></input>
                       </Button>
                    </li>

                    <li className="col-lg-6">
                       <Button className="button_git">
                          <div className="skill_range">
                            <h3> <span className="icon"> <StyledGitIcon /> </span> Git </h3>
                            <h3> 90 % </h3>
                          </div>

                          <input type="range" id="points" name="points" min="0" max="100" value="90"></input>
                       </Button>
                    </li>

                    <li className="col-lg-6">
                       <Button className="button_drupal10">
                          <div className="skill_range">
                            <h3> <span className="icon"> <StyledDrupal10Icon /> </span> Drupal 10 </h3>
                            <h3> 75 % </h3>
                          </div>

                          <input type="range" id="points" name="points" min="0" max="100" value="75"></input>
                       </Button>
                    </li>

                    <li className="col-lg-6">
                       <Button className="button_core_java">
                          <div className="skill_range">
                            <h3> <span className="icon"> <StyledCoreJavaIcon /> </span> Core Java </h3>
                            <h3> 70 % </h3>
                          </div>

                          <input type="range" id="points" name="points" min="0" max="100" value="70"></input>
                       </Button>
                    </li>

                </ol>


            </div>
    );
}

export default Skills;