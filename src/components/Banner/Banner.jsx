import "./Banner.scss";

export default function Banner() {
  return (
    <div className="Banner">
      <img src="/banner/banner.png" alt="" />
      <img src="/banner/parts.png" alt="" />
      <div className="Banner__text-container">
        <p>100% Natural Food</p>
        <h2>
          Choose the best healthier way <br /> of life
        </h2>
        <button>
          <span>Explore Now</span>
          <img src="/banner/arrow.png" alt="" />
        </button>
      </div>
    </div>
  );
}
