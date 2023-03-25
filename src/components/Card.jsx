import Button from "./Button";
import "../styles/Card.css";
import { Link } from "react-router-dom";

export function Card(props) {
  return (
    <>
      <div className="containerCard">
        <img src={props.image} alt="" className="imgCard" />
        <span>{props.title}</span>
        <span>{props.price}</span>
        <p>{props.description}</p>
        <Link to={`products/${props.id}`}>
        <Button name="Ir para o produto" status="info" />
      </Link>
      <Link to={``}>
        <Button name="Adicionar ao carrinho" status="success" />
      </Link>
      </div>
    </>
  );
}
