import "./App.css";

// import Header from "./Component/DefaultLaout/Header";
import DefaultLaout from "./Component/DefaultLaout/DefaultLaout";
import Home from "./Component/home/Home";
function App() {
  return (
    <>
      {/* <Header /> */}
      <DefaultLaout>
        <Home />
      </DefaultLaout>
    </>
  );
}

export default App;
