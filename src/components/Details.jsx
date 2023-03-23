import { useLoaderData } from "react-router-dom";
import { getProduct } from "../services/api";
import GlobalStyle from "../globalStyles";
import "../styles/Details.css";
import Header from "./Header";

export async function loaderProduct({ params }) {
  const product = await getProduct(params.id);
  return { product };
}

export default function Details() {
  const { product } = useLoaderData();
  return (
    <GlobalStyle>
        <Header />
      <div className="containerDetails">
        <div className="images">
          {product.images.map((image, key) => {
            return <img src={image} key={key} />;
          })}
        </div>
        <div className="texts">
          <span>{product.title}</span>
          <span>{product.price}</span>
          <p>{product.description}</p>
        </div>
      </div>
    </GlobalStyle>
  );
}
