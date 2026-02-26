import Smalldiv from "../../__atoms/Smalldiv/Smalldiv";
import image from "../../..//assets/money.png";
import SecondDiv from "../../__moleculs/SecondDiv/SecondDiv";
import { useState } from "react";

function Main_Div() {
  const [number, setNumber] = useState();
  const [display, setDisplay] = useState();
  const [last, setLast] = useState("none");

  return (
    <>
      <form action="" className="main_div" style={{ display: display }}>
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
          <button
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              setDisplay("none");
              setLast("flex");
            }}
          >
            submit
          </button>
        </div>
      </form>
      <div className="lastbox3" style={{ display: last }}>
        <img className="image_box" src={image} />
        <div className="selsect">
          <h1 className="orange">You selected 4 out of 5</h1>

          <h1 className="thaks">Thank you!</h1>
        </div>
        <div className="bxbx">
          <h1 className="support">
            We appreciate you taking the time to give a rating. <br /> If you
            ever need more support, don’t hesitate to <br />
            <span> get in touch!</span>
          </h1>
        </div>
      </div>
    </>
  );
}
export default Main_Div;
