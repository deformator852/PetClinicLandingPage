import arrow from "../img/arrow.png";
function ArrowButton(props) {
  return (
    <div className={props.nameClass}>
      <div className="services-text">Services</div>
      <div className="ball">
        <img className="symbol-arrow" src={arrow} />
      </div>
    </div>
  );
}

export default ArrowButton;
