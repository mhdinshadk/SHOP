import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Order from "./components/Order";
import Verify from "./pages/Verify";
import MyOrders from "./pages/MyOrders";

export default function App() {
  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path="/" element = {<Home />} />
    <Route path ="/product" element = {<Product />}>
      <Route path = ":productId" element = {<Product />} />
    </Route>
    <Route path="/cart" element = {<Cart />} />
    <Route path = "/order" element = {<Order />} />
    <Route path = "/verify" element = {<Verify />} />
    <Route path = "/MyOrder" element = {<MyOrders />} />
   </Routes>
   </BrowserRouter>
  )
}
