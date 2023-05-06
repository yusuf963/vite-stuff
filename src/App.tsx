import React, { Suspense, useState } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./store/rootReducer";
import { useLocalStorage } from "./hooks/useLocalStorage";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Article from "./components/articles";
import Footer from "./components/Footer";
import List from "./components/List";
import Pool from "./components/Pool";
import Video from "./components/Video";
import Form from "./components/Form";
import TrainLine from "./components/TrainLine";
import TrainLineAnnoucer from "./components/TrainAnnoucement";
import MatchControl from "./components/MatchControl";
import MatchDisplay from "./components/MatchDisplay";
import Country from "./components/Country";
import Product from "./components/Product";
import "./styles/App.css";
import ShopingCart from "./components/ShopingCart";
import Section from "./layouts/Section";

const Nav = React.lazy(() => import("./components/Nav"));

function App() {
  const [count, setCount] = useState(0);

  const someChildrent = <h3>hello I am a children prop</h3>;
  const data = useLocalStorage("persist:root");

  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Section children={someChildrent} name={"some name "}></Section>
          <Article />
          <ShopingCart />
          <Product />
          <MatchControl />
          <MatchDisplay />
          <Form />
          {/* <Nav name="some name">
            hello I am a children prop <small>ok</small>
          </Nav> */}
          {/* <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              Increase{" "}
            </button>
            <button onClick={() => setCount((count) => count - 1)}>
              {" "}
              Decrease
            </button>
            <p>count is {count}</p>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p> */}
          <List />
          <Pool />
          <Video />
          <TrainLineAnnoucer />
          <TrainLine />
          <Footer />
          <Country />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
