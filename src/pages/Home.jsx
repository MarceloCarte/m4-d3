import Footer from "../components/Footer";
import Cover from "../components/Cover";
import CardPizza from "../components/CardPizza";
import Navbar from "../components/Navbar";
import pizzas from "../data/pizzas.json";

function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div>
          <Cover />
        </div>

        <div className="grid grid-cols-3 p-14 gap-8 justify-center overflow-hidden flex-grow">
          {pizzas.map((pizza) => {
            return <CardPizza key={pizza.id} pizza={pizza} />;
          })}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
