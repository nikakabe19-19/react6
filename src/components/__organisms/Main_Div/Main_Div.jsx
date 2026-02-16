import Smalldiv from "../../__atoms/Smalldiv/Smalldiv";
import SecondDiv from "../../__moleculs/SecondDiv/SecondDiv";


function Main_Div() {
  return (
    <>
      <div className="main_div">
        <SecondDiv />
        <Smalldiv />
        <div className="last_box">
          <h1 className="sub">SUBMIT</h1>
        </div>
      </div>
    </>
  );
}
export default Main_Div;
