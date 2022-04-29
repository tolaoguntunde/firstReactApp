import React from "react";
import Subtitle from "./Subtitle";

const Education = () => {
    return (
      <div>
        <Subtitle title="Education" />
        <ul>
          <li>
            <a
              href="https://www.providenceschoolsng.com/providencePrimary"
              target="_blank"
            >
              Providence Primary School
            </a>{" "}
          </li>
          <li>
            {" "}
            <a
              href="https://www.facebook.com/AfricanChurchModelCollege "
              target="_blank"
            >
              {" "}
              African Church College
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://www.facebook.com/watch/700797739988991/ "
              target="_blank"
            >
              {" "}
              Royal Crown College
            </a>
          </li>
        </ul>
        <hr />
      </div>
    );
  };

  export default Education;