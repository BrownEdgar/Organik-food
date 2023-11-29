import "./Testimonial.scss"

export default function Testimonial() {
  return (
    <div className="Testimonial">
      <img src="Image.jpg" alt="cover"  className="cover"/>
      <div className="Testimonial-container">
        <p className="Testimonial-container-title">Testimonial</p>
        <p className="Testimonial-container-question">What Our Customer Saying?</p>
        <div className="Testimonial-user">
          <img src="Image.png" alt="user" className="Testimonial-user-img"/>
          <img src="Star.svg" alt="stars" className="Testimonial-user-stars"/>
          <p className="Testimonial-user-desc">Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
          <div className="Testimonial-user-info">
            <p className="Testimonial-user-info-name">Sara Taylor</p>
            <p className="Testimonial-user-info-prof">Consumer</p>
          </div>
          <div className="points">
            <span className="point"></span>
            <span className="point point-two"></span>
            <span className="point"></span>
          </div>
        </div>
        <div className="circles">
          <div className="circle">
            <p className="circle-percent">100%</p>
            <p className="circle-title">Organic</p>
          </div>
          <div className="circle">
            <p className="circle-percent">285</p>
            <p className="circle-title">Active Product</p>
          </div>
          <div className="circle">
            <p className="circle-percent">350+</p>
            <p className="circle-title">Organic Orchads</p>
          </div>
          <div className="circle">
            <p className="circle-percent">25+</p>
            <p className="circle-title">Years of Farming</p>
          </div>
        </div>
      </div>
    </div>
  )
}
