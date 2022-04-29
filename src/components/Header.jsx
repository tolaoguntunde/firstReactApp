import React from "react";
import Title from "./Title";
import Image from "./Image";

const Header = () => {
    return (
      <div>
        <table cellPadding="10px">
          <tbody>
            <tr>
              <td>
                <Image />
              </td>
              <td>
                <Title />
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
      </div>
    );
  };

  export default Header;