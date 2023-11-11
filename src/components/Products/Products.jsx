import { useSelector } from "react-redux";
import arrow from "/arrow.svg";
import "./Products.scss";

export default function Products() {
  const products = useSelector((state) => state.products);
  return (
    <>
      <div className="Products container">
        <div className="Products__titles">
          <h2>Categories</h2>
          <h3>Our Products</h3>
        </div>
        <div className="Products__items">
          <ul>
            {products.map((product, index) => (
              <li className="Products__item" key={index}>
                <span>{product.type}</span>
                <img src={product.image} alt={product.name} />
                <div className="Products__rating">
                  <h2>{product.name}</h2>
                  <div className="Products__price">
                    <p className="Products__oldprice">${product.oldprice}.00</p>
                    <p className="Products__newprice">${product.newprice}.00</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <button>
          <div className="Products__button">
            <h2>Load More</h2>
            <img src={arrow} alt="arrow" />
          </div>
        </button>
      </div>
    </>
  );
}
