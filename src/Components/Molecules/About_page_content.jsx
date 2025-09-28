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
import "../../styles/Body/about_page_content.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const StyledReactIcon = styled(GrReactjs)`
  font-size: 4rem;
  color: #06b6d4;
  @media (max-width: 576px) {
    font-size: 3.5rem;
  }
`;

const StyledjQueryIcon = styled(DiJqueryUiLogo)`
  font-size: 5rem;
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
  font-size: 4.5rem;
  color: #CD6799;
  @media (max-width: 576px) {
    font-size: 3.5rem;
  }
`;

const StyledGitIcon = styled(FaGitAlt)`
  font-size: 4.5rem;
  color: #F1502F;
  @media (max-width: 576px) {
    font-size: 3.5rem;
  }
`;

const StyledDrupal10Icon = styled(FaDrupal)`
  font-size: 4.5rem;
  color: #066baa;
  @media (max-width: 576px) {
    font-size: 3.5rem;
  }
`;

const StyledCoreJavaIcon = styled(FaJava)`
  font-size: 4.5rem;
  color: #066baa;
  @media (max-width: 576px) {
    font-size: 3.5rem;
  }
`;

function About_page_content() {
    return (
            <div className="about-page-content">
                <h1> About </h1>
                <p>
                  <strong>Frontend Developer</strong> with nearly <strong>3 years</strong> of experience in <strong>HCL Technologies</strong>, building accessible and scalable web 
                  applications. Specialized in <strong>React JS, Drupal CMS, jQuery, JavaScript, and modern CSS frameworks.</strong> Quick learner with 
                  Proven track record in Upskilling, collaborate effectively in Agile methodology, and delivering robust applications. 
                  Passionate about flawless user experience, performance optimization, and solving real-world problems.
                </p>
                <p>
                    Strong understanding of cross-browser compatibility and Accessibility 
                    improvements. Adept at using version control systems like Git and collaboration tools 
                    such as JIRA and BitBucket.
                </p>
                <p>
                    Excellent problem-solving abilities and effective communication 
                    skills, with a proven track record of working collaboratively with development teams and stakeholders 
                    to deliver high-quality web solutions. 
                </p>
                {/* <p> 
                    Experienced Drupal Frontend Developer with over 2.8+ years of experience in 
                    designing and implementing responsive, user-friendly web interfaces. Proficient 
                    in React JS, jQuery, JavaScript, Bootstrap and modern frontend frameworks such as 
                    Tailwind CSS.
                </p>
                <p>
                    Strong understanding of cross-browser compatibility and Accessibility 
                    improvements. Adept at using version control systems like Git and collaboration tools 
                    such as JIRA and BitBucket.
                </p>
                <p>
                    Excellent problem-solving abilities and effective communication 
                    skills, with a proven track record of working collaboratively with development teams and stakeholders 
                    to deliver high-quality web solutions. 
                </p> */}


                <div className="section_what_i_do">
                    <h2 className="main_heading"> What I Do! </h2>

                    <div className="row">

                        <div className="col-lg-6">

                            <div className="ReactJS">
                              <span className="icon"> <StyledReactIcon /> </span>
                              <div className="content">
                                  <h2> React JS </h2>
                                  <p> 
                                      Expertise in building dynamic web apps, 
                                      utilizing hooks, state management, and component-based 
                                      architecture for efficient code. 
                                  </p>
                              </div>
                            </div>

                        </div>


                        <div className="col-lg-6">

                            <div className="jQuery">
                              <span className="icon"> <StyledjQueryIcon /> </span>
                                <div className="content">
                                  <h2> jQuery </h2>
                                  <p> 
                                      Proficient in jQuery with extensive experience in DOM manipulation, 
                                      event handling, and optimizing user interactions for seamless experiences.
                                  </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="JavaScript">
                              <span className="icon"> <StyledJavaScriptIcon /> </span>
                                <div className="content">
                                  <h2> JavaScript </h2>
                                  <p> 
                                      Highly skilled in JavaScript with a deep understanding of ES6+ features, 
                                      Proven ability to write efficient, and maintainable code 
                                      for complex web applications.
                                  </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="Bootstrap">
                               <span className="icon"> <StyledBootstrapIcon /> </span>
                                <div className="content">
                                  <h2> Bootstrap </h2>
                                  <p> 
                                      using Bootstrap in efficient way, skilled in crafting responsive, mobile-first designs 
                                      with a keen eye for usability and visual aesthetics.
                                  </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="TailwindCSS">
                               <span className="icon"> <StyledTailwindCSSIcon /> </span>
                                <div className="content">
                                  <h2> Tailwind CSS </h2>
                                  <p> 
                                      Expert in Tailwind CSS, adept at creating highly customizable, 
                                      responsive designs with a utility-first approach for rapid development.
                                  </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="SASS">
                               <span className="icon"> <StyledSASSIcon /> </span>
                                <div className="content">
                                  <h2> Sass / Less </h2>
                                  <p> 
                                     Proficient in Sass and Less, skilled in writing modular, maintainable CSS with 
                                     variables, mixins, and nesting for efficient and scalable styling.
                                  </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="CoreJava">
                               <span className="icon"> <StyledCoreJavaIcon  /> </span>
                                <div className="content">
                                  <h2> Core Java </h2>
                                  <p> 
                                      Certified in Core Java and having strong knowledge on core concepts like OOPS, 
                                      Collects, Multithreading etc. Hands on Experience by doing Real time projects.
                                  </p>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-6">
                            <div className="Drupal10">
                               <span className="icon"> <StyledDrupal10Icon  /> </span>
                                <div className="content">
                                  <h2> Drupal 10 </h2>
                                  <p> 
                                      Working as a Drupal 10 Frontend developed having experience in Drupal Theming and
                                      all CMS activities, worked on Twig, Scss, jQuery, JavaScript.
                                  </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="Git">
                               <span className="icon"> <StyledGitIcon /> </span>
                                <div className="content">
                                  <h2> Git </h2>
                                  <p> 
                                      Hands on Experience in Git for raising PR&apos;s to the dev, qa, UAT for releases. 
                                      Experienced in all git commands and what it does.
                                  </p>
                                </div>
                            </div>
                        </div>
                




                    </div>

                </div>
            </div>
    );
}

export default About_page_content;