import Button from "./Button";
import "../styles/Card.css";
import tenisImg from "../assets/tenis.jpg";

const products = [
  {
    title: "Unbranded Rubber Pants",
    price: "R$ 243,00",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    status: "success",
    id: "01",
  },
  {
    title: "Electronic Metal Bacon",
    price: "R$ 775,00",
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    status: "warning",
    id: "02",
  },
  {
    title: "Tasty Wooden Bike",
    price: "R$ 101,00",
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and suppor",
    status: "danger",
    id: "03",
  },  
];

export function Card() {
  return (
    <div>
      {products.map((product, key) => (
        <div key={key} className="container">
          <img src={tenisImg} alt="" className="imgCard" />
          <span>{product.title}</span>
          <span>{product.price}</span>
          <p>{product.description}</p>
          <Button name="Button" status={product.status}/>
        </div>
      ))}
    </div>
  );
}
