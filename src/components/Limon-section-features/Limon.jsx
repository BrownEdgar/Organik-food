import './Limon.scss';

export default function Limon() {
  const iconData = [
    {
      src: 'images/icon-1.png',
      alt: 'Icon',
      title: 'Organic Foods Only',
      text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    },
    {
      src: 'images/icon-2.png',
      alt: 'Icon',
      title: 'Quality Standards',
      text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    },
  ];

  return (
    <div className="limon-website">
      <div className="content">
        <div className="left">
          <img
            src="images/Limon1.png"
            alt="Image"
            className="left-image"
          />
        </div>
        <div className="right">
          <h1>About Us</h1>
          <h2>We Believe in Working <br /> Accredited Farmers</h2>
          <p>
            Simply dummy text of the printing and typesetting industry. <br />
            Lorem had ceased to been the industry's standard dummy text ever since <br />
            the 1500s, when an unknown printer took a galley.
          </p>
          {iconData.map((data, index) => (
            <div className="sub-div" key={index}>
              <img src={data.src} alt={data.alt} className="icon" />
              <div>
                <h4>{data.title}</h4>
                <p>{data.text}</p>
              </div>
            </div>
          ))}
          <button>Click me</button>
        </div>
      </div>
    </div>
  );
}


