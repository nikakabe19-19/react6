function Smalldiv(props) {
  return (
    <>
      <div className={props.classname} onClick={props.onClick}>
        <p>{props.num}</p>
        <p className={props.num}></p>
      </div>
    </>
  );
}

export default Smalldiv;
