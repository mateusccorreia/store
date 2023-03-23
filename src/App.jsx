import Header from "./components/Header";
import GlobalStyle from "./globalStyles";
import { Card } from "./components/Card";
import { getAllProducts } from "./services/api";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import './styles/App.css'

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchGetProducts() {
    try {
      setIsLoading(true);
      const response = await getAllProducts()
      setProducts(response);
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchGetProducts();
  }, []);

  return ( 
    <>
      <GlobalStyle>
        <Header />
        <div className="mainDiv">
          {isLoading ? (
            <ReactLoading type={"bars"} color={"red"} className="loading"/>
          ) : (
            products.map((product, id) => (
              <Card
                title={product.title}
                price={product.price}
                description={product.description}
                key={id}
                image={product.images[0]}
                id={product.id}
              />              
            ))
          )}
        </div>
      </GlobalStyle>
    </>
  );
}

export default App;
