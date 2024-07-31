import "./App.css";
import NavBar from "../src/components/NavBar";
import TopBar from "../src/components/TopBar";
import Banner from "./components/Banner";
import Category from "./components/Category";
import Products from "./components/Products";

function App() {
  

  return (
    <div className="App">
      <TopBar />
      <NavBar />
      <div className="w-full m-auto pt-0">
        <Banner />
      </div>
      <Category />
      <Products />
    </div>
  );
}

export default App;
