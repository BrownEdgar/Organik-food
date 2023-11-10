import "./Offer.scss";

export default function Offer() {
  return (
    <div className="Offer container">
      <img src="/offer1.png" alt="offer1" />
      <div className="text-first">
        <span>Natural!!</span>
        <h2> Get Garden Fresh Fruits</h2>
      </div>
      <img src="/offer2.png" alt="offer2" />
      <div className="text-second">
        <span>Offer!!</span>
        <h2>
          Get 10% off
          <br />
          on Vegetables
        </h2>
      </div>
    </div>
  );
}
