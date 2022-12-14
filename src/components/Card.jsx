export const Card = () => {
  return (
    <div className="card-container">
      <div className="card-left">
        <img src="./images/mountfuji.png" />
      </div>
      <div className="card-right">
      <div className="card-flex">
        <div className="card-country">JAPAN</div>
        <div className="card-googlelink">View on Google Maps</div>
        </div>
        <div className="card-title">Mount Fuji</div>
        <div className="card-date">12 Jan, 2021 - 24 Jan, 2021</div>
        <div className="card-comment">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </div>
      </div>
    </div>
  );
};
