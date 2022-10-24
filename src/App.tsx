import { FunctionComponent } from "react";
import { BrowserRouter, Routes as Switch, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Error from "./pages/Error";
import Accomodation from "./pages/Accomodation";
import Home from "./pages/Home";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accomodation/:id" element={<Accomodation />} />
        <Route path="*" element={<Error />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
