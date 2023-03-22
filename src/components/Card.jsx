import Button from "./Button";
import "../styles/Card.css";
import { Link } from "react-router-dom";

export function Card(props) {
  return (
    <>
      <Link to={"256"}>
        <Button name="Ir para o produto" status="info" />
      </Link>
      <div className="container">
        <img src={props.image} alt="" className="imgCard" />
        <span>{props.title}</span>
        <span>{props.price}</span>
        <p>{props.description}</p>
      </div>
    </>
  );
}
