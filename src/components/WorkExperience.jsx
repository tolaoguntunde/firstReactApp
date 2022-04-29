import React from "react";
import Subtitle from "./Subtitle";

const WorkExperience = () => {
    return (
      <div>
        <Subtitle title="Work Experience" />
        <table>
          <thead>
            <tr>
              <th align="left">Dates</th>
              <th align="left">Work</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td width="25%">Jun 2020 - Present</td>
              <td>Information Technology Support Analyst</td>
            </tr>
            <tr>
              <td>Jun 2019 - Jun 2020</td>
              <td>Technical Support Analyst</td>
            </tr>
            <tr>
              <td>Dec 2016 -Jul 2018</td>
              <td>IT Support Officer</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  

  export default WorkExperience;