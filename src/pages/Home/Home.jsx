import Offer from "../../components/Offer/Offer";
import Products from "../../components/Products/Products";
import Subscribe from '../../components/feature/Subscribe/Subscribe';
import "./Home.scss";

export default function Home() {
  return (
    <div>
      <Offer />
      <Products />
      <Subscribe />

    </div>
  );
}
