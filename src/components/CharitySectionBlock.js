function CharitySectionBlock(props) {
  return (
    <div className="charity-section__block">
      <div>
        <p style={{ width: props.textWidth }}>{props.text}</p>
        <img src={props.img}></img>
      </div>
    </div>
  );
}

export default CharitySectionBlock;
