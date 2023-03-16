import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalStyle from "./globalStyles";
import Button from "./components/Button";
import { Card } from "./components/Card";

function App() {
  return (
    <>
      <GlobalStyle>
        <Header />
        <Card />
      </GlobalStyle>
    </>
  );
}

export default App;
