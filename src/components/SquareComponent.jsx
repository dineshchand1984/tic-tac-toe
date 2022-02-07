function SquareComponent(props) {
  return (
    <button className="box" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default SquareComponent;
