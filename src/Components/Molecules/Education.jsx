import { FaUniversity } from "react-icons/fa";
import { LuSchool } from "react-icons/lu";
import { GiSchoolBag } from "react-icons/gi";

import styled from "styled-components";
import "../../styles/Body/education.css";


const StyledUniversityIcon = styled(FaUniversity)`
  font-size: 40px;
  position: relative;
  bottom: 8px;
  margin: 0 15px 5px 0;
  color: rgb(28, 156, 234);
`;

const StyledHighSchoolIcon = styled(LuSchool)`
  font-size: 50px;
  position: relative;
  bottom: 8px;
  margin: 0 15px 15px 0;
  color: rgb(28, 156, 234);
`;

const StyledSchoolIcon = styled(GiSchoolBag)`
  font-size: 50px;
  position: relative;
  bottom: 8px;
  margin: 0 15px 15px 0;
  color: rgb(28, 156, 234);
`;


function Education() {
    return (
        <div className="education_section">
            <h1> Education </h1>

            <div className="education_column">

                <h2> <span> <StyledUniversityIcon /> </span> Bachelor&apos;s Degree </h2> 
                <div className="graduation_section">
                    <ol>
                      <li>

                          <h3 className="college"> Vel Tech deemed to be University </h3>
                          <div className="department">
                             <p> B.Tech in ECE </p>
                             <p> 2018 - 2022 </p>
                          </div>
                          <h4 className="cgpa"> CGPA: 9.0 </h4>

                          <h3 className="achievements"> Achievements </h3>
                          <ul>
                            <li className="list"> <p> Reached Semi-Finals round in IICDC Texas Instruments </p> </li>
                            <li className="list"> <p> Active Member in Community Pro Club </p> </li>
                            <li className="list"> <p> Participated in Mega Seed Ball Event organised by all the colleges together </p> </li>
                          </ul>

                      </li>
                    </ol>
                </div>


                <h2> <span> <StyledHighSchoolIcon /> </span> High School </h2>
                <div className="graduation_section">
                    <ol>
                        <li>
                          <h3 className="college"> Sri Chaitanya Junior College </h3>
                          <div className="department">
                             <p> MPC </p>
                             <p> 2016 - 2018 </p>
                          </div>
                          <h4 className="cgpa"> CGPA: 9.35 </h4>

                          <h3 className="achievements"> Achievements </h3>
                          <ul>
                            <li className="list"> <p> Star Batch student in entire High School education </p> </li>
                            <li className="list"> <p> Secured good Rank in the Competitive exams </p> </li>
                          </ul>


                        </li>
                    </ol>
                </div>


                <h2> <span> <StyledSchoolIcon /> </span> School </h2>
                <div className="graduation_section">
                    <ol>
                        <li>
                          <h3 className="college"> Rishi Vidya Nikethan High School </h3>
                          <div className="department">
                             <p> High School </p>
                             <p> 2015 - 2016 </p>
                          </div>
                          <h4 className="cgpa"> CGPA: 9.7 </h4>

                          <h3 className="achievements"> Achievements </h3>
                          <ul>
                            <li className="list"> <p> Received Medals and Certificates for getting Top Rank in the Schooling </p> </li>
                            <li className="list"> <p> Active player in the Games and a Tennicoit player </p> </li>
                          </ul>


                        </li>
                    </ol>
                </div>

                {/* <li>
                          <h3 className="college"> Sri Chaitanya Junior College </h3>
                          <div className="department">
                             <p> MPC </p>
                             <p> 2016 - 2018 </p>
                          </div>
                          <h4 className="cgpa"> CGPA: 9.35 </h4>
                        </li>

                        {/* <li>
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
                        </li> */}



              </div>

        </div>
    );
}

export default Education;