import Limon from '../../components/Limon-section-features/Limon';
import Offer from "../../components/Offer/Offer";
import Products from "../../components/Products/Products";
import "./Home.scss";

export default function Home() {
  return (
    <div>
      <Offer />
      <Products />
      <Limon />
    </div>
  );
}
