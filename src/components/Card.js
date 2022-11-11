const Card = (props) => {
  return (
    <div className="container">
      <div className="cards" style={{ backgroundColor: props.colorCode }}>
        <div className="card">
          <h3 className="colorcode">{props.header}</h3>
          <p style={{ color: props.colorCode }} className="title">
            {props.title} </p>
        </div>
      </div>
    </div>
  );
};
export default Card;
