import { VscVerifiedFilled } from "react-icons/vsc";
import { FaGraduationCap } from "react-icons/fa6";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { AiOutlineLaptop } from "react-icons/ai";
import { PiCertificateLight } from "react-icons/pi";

import styled from "styled-components";
import "../../styles/Body/Resume.css";

import Skills from "../Atoms/Skills";

const StyledSummaryIcon = styled(VscVerifiedFilled)`
  font-size: 30px;
  margin: 0 5px 15px 0;
  color: rgb(28, 156, 234);
  @media (max-width: 576px) {
    font-size: 30px;
    margin: 0 5px 10px 0;
  }
`;

const StyledEducationIcon = styled(FaGraduationCap)`
  font-size: 50px;
  margin: 0 5px 15px 0;
  color: rgb(28, 156, 234);
  @media (max-width: 576px) {
    font-size: 40px;
    margin: 0 5px 12px 0;
  }
`;

const StyledWorkIcon = styled(HiOutlineBriefcase)`
  font-size: 50px;
  margin: 0 5px 25px 0;
  color: rgb(28, 156, 234);
  @media (max-width: 576px) {
    font-size: 40px;
    margin: 0 5px 15px 0;
  }
`;

const StyledProjectIcon = styled(AiOutlineLaptop)`
  font-size: 50px;
  margin: 0 5px 25px 0;
  color: rgb(28, 156, 234);
  @media (max-width: 576px) {
    font-size: 40px;
    margin: 0 5px 12px 0;
  }
`;

const StyledCertificateIcon = styled(PiCertificateLight)`
  font-size: 50px;
  margin: 0 5px 25px 0;
  color: rgb(28, 156, 234);
  @media (max-width: 576px) {
    font-size: 40px;
  }
`;

function Resume () {
    return (
        <>
          <div className="Resume_Page">
              <h1> Resume </h1>

              <div className="summary">
                <h2> <span> <StyledSummaryIcon/> </span> Summary </h2>
                <p>
                  Skilled Front-end Developer with 2+ years of experience in designing, 
                  developing and maintaining front-end web applications. Developed responsive 
                  and accessible user interfaces using advanced Frameworks like React JS, Bootstrap, JavaScript and jQuery.
                  Proven track record in improving website Accessibility according to WCAG standards.
                </p>
              </div>


              <div className="education">
                <h2> <span> <StyledEducationIcon/> </span> Education </h2> 
                <div className="graduation">
                    <ol>
                      <li>
                          <h3 className="college"> Vel Tech deemed to be University </h3>
                          <div className="department">
                             <p> B.Tech in ECE </p>
                             <p> 2018 - 2022 </p>
                          </div>
                          <h4 className="cgpa"> CGPA: 9.0 </h4>
                      </li>

                      <li>
                          <h3 className="college"> Sri Chaitanya Junior College </h3>
                          <div className="department">
                             <p> MPC </p>
                             <p> 2016 - 2018 </p>
                          </div>
                          <h4 className="cgpa"> CGPA: 9.35 </h4>
                      </li>

                      <li>
                          <h3 className="college"> Rishi Vidya Nikethan High School </h3>
                          <div className="department">
                             <p> High School </p>
                             <p> 2015 - 2016 </p>
                          </div>
                          <h4 className="cgpa"> CGPA: 9.7 </h4>
                      </li>
                    </ol>
                </div>
              </div>

              <div className="work_experience">
                  <h2> <span> <StyledWorkIcon /> </span> Work Experience </h2>
                  <div className="experience">
                      <div className="date">
                        <h3> HCL Technologies </h3>
                        <p> Feb 2023 - Present </p>
                      </div>
                      <h4> Drupal Frontend Developer </h4>

                      <ul>
                        <li>
                            <p> Developed Drupal-based websites with a single code base. </p>
                        </li>
                        <li>
                            <p> 
                              Improved website accessibility from 67% to 94% by implementing accessibility best 
                              practices and ensuring compliance with WCAG standards.
                            </p>
                        </li>
                        <li>
                            <p> Followed Agile methodology to manage and deliver project tasks. </p>
                        </li>
                        <li>
                            <p> Utilized Jira and Bitbucket to track progress and manage backlogs. </p>
                        </li>
                        <li>
                            <p> 
                              Participated in daily stand-ups, sprint planning, and retrospectives to ensure 
                              effective collaboration and project delivery.
                            </p>
                        </li>
                      </ul>

                  </div>
              </div>


              <div className="project_work">
                  <h2> <span> <StyledProjectIcon /> </span> Project </h2>
                  <div className="project">
                      <div className="date">
                        <h3> Novartis Dolphin </h3>
                        <p> Feb 2023 - Present </p>
                      </div>

                      <ul>
                        <li>
                            <p> Developed all websites with a single code base using Drupal 10. </p>
                        </li>
                        <li>
                            <p> 
                              Website Accessibility has been improved from 67% to 94% by implementing 
                              accessibility best practices and ensuring compliance with WCAG standards. 
                            </p>
                        </li>
                        <li>
                            <p> Implemented responsive and dynamic user interfaces using jQuery and JavaScript. </p>
                        </li>
                        <li>
                            <p> Utilized Bootstrap for consistent and mobile-friendly designs across various devices. </p>
                        </li>
                        <li>
                            <p> Wrote CSS using SASS for enhanced styling capabilities. </p>
                        </li>
                        <li>
                            <p> Collaborated with backend developers to integrate frontend components in Drupal. </p>
                        </li>
                        <li>
                            <p> Ensured cross-browser compatibility and optimized performance for a seamless user experience. </p>
                        </li>
                      </ul>

                  </div>
              </div>


              <Skills />


              <div className="certifications">
                <h2> <span> <StyledCertificateIcon /> </span> Certification </h2>

                <div className="certificate">
                  <ul>
                    <li>
                      <h3> React JS </h3>
                      <p> Certified as React JS developer from HCL Technologies and from UDEMY </p>
                    </li>
                    <li>
                      <h3> JavaScript and jQuery </h3>
                      <p> Certified in JavaScript and jQuery </p>
                    </li>
                    <li>
                      <h3> Core Java </h3>
                      <p> Certified in Core Java from HCL </p>
                    </li>
                  </ul>
                </div>
              </div>

          </div>
        </>
    );
}

export default Resume;