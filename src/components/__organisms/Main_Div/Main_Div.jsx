import Smalldiv from "../../__atoms/Smalldiv/Smalldiv";

import SecondDiv from "../../__moleculs/SecondDiv/SecondDiv";
import { useState } from "react";

function Main_Div() {
  const [number, setNumber] = useState();

  return (
    <>
      <div className="main_div">
        <SecondDiv />

        <div className="oval_div1">
          <Smalldiv
            classname={`oval_div ${number == "1" ? "oval_divbox" : ""}`}
            num="1"
            onClick={() => {
              setNumber("1");
            }}
          />
          <Smalldiv
            classname={`oval_div ${number == "2" ? "oval_divbox" : ""}`}
            num="2"
            onClick={() => {
              setNumber("2");
            }}
          />
          <Smalldiv
            classname={`oval_div ${number == "3" ? "oval_divbox" : ""}`}
            num="3"
            onClick={() => {
              setNumber("3");
            }}
          />
          <Smalldiv
            classname={`oval_div ${number == "4" ? "oval_divbox" : ""}`}
            num="4"
            onClick={() => {
              setNumber("4");
            }}
          />
          <Smalldiv
            classname={`oval_div ${number == "5" ? "oval_divbox" : ""}`}
            num="5"
            onClick={() => {
              setNumber("5");
            }}
          />
        </div>
        <div className="last_box">
          <button className="btn">SUBMIT</button>
        </div>
      </div>
    </>
  );
}
export default Main_Div;
