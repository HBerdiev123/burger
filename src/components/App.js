import TopBar from "../components/header/topBar";
import Header from "../components/header/header";
import { BrowserRouter, Route } from "react-router-dom";
import Contacts from "./contacts";
import Home from "./home";
import Menu from "./menu";
import Footer from "./footer";
import Cart from "./cart";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/menu" component={Menu} />
      </BrowserRouter>
      <Footer />
      <Cart />
    </div>
  );
}
