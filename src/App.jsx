import { pizzaData } from "./data";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Menu } from "./Menu";

function App() {
  const pizzas = pizzaData;
  return (
    <div className="container">
      <Header />
      <Menu pizzas={pizzas} />
      <Footer />
    </div>
  );
}

export default App;


