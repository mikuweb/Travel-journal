
export const Card = (props) => {
  
  return (
    <div className="card-container">
      <div className="card-left">
        <img src={props.item.imageUrl} />
      </div>
      <div className="card-right">
        <div className="card-flex">
          <div className="card-country">{props.item.location}</div>
          <div className="card-googlelink">
            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
          </div>
        </div>
        <div className="card-title">{props.item.title}</div>
        <div className="card-date">{`${props.item.startDate} - ${props.item.endDate}`}</div>
        <div className="card-comment">
          {`${props.item.description}`}
        </div>
      </div>
    </div>
  );
};
