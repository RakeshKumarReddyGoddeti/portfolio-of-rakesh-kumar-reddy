import { VscVerifiedFilled } from "react-icons/vsc";
import { FaGraduationCap } from "react-icons/fa6";
import { HiOutlineBriefcase } from "react-icons/hi2";
// import { AiOutlineLaptop } from "react-icons/ai";
import { PiCertificateLight } from "react-icons/pi";
import { GiAchievement } from 'react-icons/gi';

import styled from "styled-components";
import "../../styles/Body/Resume.css";

import Skills from "../Atoms/Skills";

const StyledSummaryIcon = styled(VscVerifiedFilled)`
  font-size: 40px;
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

// const StyledProjectIcon = styled(AiOutlineLaptop)`
//   font-size: 50px;
//   margin: 0 5px 25px 0;
//   color: rgb(28, 156, 234);
//   @media (max-width: 576px) {
//     font-size: 40px;
//     margin: 0 5px 12px 0;
//   }
// `;

const StyledCertificateIcon = styled(PiCertificateLight)`
  font-size: 50px;
  margin: 0 5px 25px 0;
  color: rgb(28, 156, 234);
  @media (max-width: 576px) {
    font-size: 40px;
  }
`;

const StyledAchievementIcon = styled(GiAchievement)`
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
                  <strong>Frontend Developer</strong> with nearly <strong>3 years</strong> of experience in <strong>HCL Technologies</strong>, building accessible and scalable web 
                  applications. Specialized in <strong>React JS, Drupal CMS, jQuery, JavaScript, and modern CSS frameworks.</strong> Quick learner with 
                  Proven track record in Upskilling, collaborate effectively in Agile methodology, and delivering robust applications. 
                  Passionate about flawless user experience, performance optimization, and solving real-world problems.
                </p>
                {/* <p>
                  Skilled Front-end Developer with 2+ years of experience in designing, 
                  developing and maintaining front-end web applications. Developed responsive 
                  and accessible user interfaces using advanced Frameworks like React JS, Bootstrap, JavaScript and jQuery.
                  Proven track record in improving website Accessibility according to WCAG standards.
                </p> */}
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
                            <p> Developed Drupal-based web applications, focused on single codebase solutions to maximize efficiency and scalability. </p>
                        </li>
                        <li>
                            <p> 
                              Boosted website accessibility score from 67% to 97% by implementing WCAG standards and best 
                              practices, directly improving user experience for diverse audiences.
                            </p>
                        </li>
                        <li>
                            <p> Designed and implemented Responsive, high-performance user interfaces using React JS, jQuery, 
                                JavaScript, Bootstrap, and SASS.
                            </p>
                        </li>
                        <li>
                            <p> Utilized SonarQube for automated code quality analysis and Storybook for developing and documenting 
                                reusable UI components, enhancing code reliability and frontend consistency across projects.
                            </p>
                        </li>
                        <li>
                            <p> 
                              Following Agile methodologies to efficiently manage and deliver project tasks, resulting in improved team 
                              collaboration and timely completion of deliverables.
                            </p>
                        </li>
                        <li>
                            <p> 
                              Leveraged Jira and Bitbucket for effective project tracking, backlog management, and version control.
                            </p>
                        </li>
                        <li>
                            <p> 
                               Collaborated cross-functionally with backend developers to seamlessly integrate frontend components 
                               with Drupal modules, contributing to robust application architecture. 
                            </p>
                        </li>
                        <li>
                            <p> 
                              Optimized website performance and ensured cross-browser compatibility for consistent user experiences.
                            </p>
                        </li>
                        <li>
                            <p> 
                              Proactively upskilled in emerging technologies and tools, Recognized by peers and management for the 
                              ability to swiftly learn and implement innovative solutions in dynamic environments.
                            </p>
                        </li>
                      </ul>

                  </div>
              </div>


              {/* <div className="project_work">
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
              </div> */}


              <Skills />

            <div className="certifications">
                <h2> <span> <StyledAchievementIcon /> </span> Key Achievements </h2>

                <div className="certificate">
                  <ul>
                    <li>
                      <p> Best Performer of the year Award at HCL Technologies, for achieving the highest employee rating over 6 
                         consecutive quarters ( 2024  – 2025)
                      </p>
                    </li>
                    <li>
                      <p> React Bronze Medal Award – 2024 </p>
                    </li>
                    <li>
                      <p> Appointed as Frontend Developer in Novartis Dolphin project for developing HCL website </p>
                    </li>
                    <li>
                      <p> Employee of the Year Reward – 2024 </p>
                    </li>
                  </ul>
                </div>
              </div>


              <div className="certifications">
                <h2> <span> <StyledCertificateIcon /> </span> Certification </h2>

                <div className="certificate">
                  <ul>
                    <li>
                      <h3> React JS </h3>
                      <p> Certified as React JS developer from HCL Technologies and from UDEMY, Received Bronze medal.  </p>
                    </li>
                    <li>
                      <h3> JavaScript and jQuery </h3>
                      <p> Certified in JavaScript and jQuery </p>
                    </li>
                    <li>
                      <h3> Core Java </h3>
                      <p> Certified in Core Java from HCL Technologies. </p>
                    </li>
                  </ul>
                </div>
              </div>

          </div>
        </>
    );
}

export default Resume; 