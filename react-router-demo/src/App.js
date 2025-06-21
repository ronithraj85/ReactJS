import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import About from "./components/About";
import NavBar from "./components/NavBar";
import OrderSummary from "./components/OrderSummary";
import PageNotFound from "./components/PageNotFound";
import Products from "./components/Products";
import FeaturedProds from "./components/FeaturedProds";
import NewProds from "./components/NewProds";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import AdminUser from "./components/AdminUser";
const LazyLoadAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense>
              <LazyLoadAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProds />} />
          <Route path="featured" element={<FeaturedProds />} />
          <Route path="new" element={<NewProds />} />
        </Route>
        <Route path="/users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<AdminUser />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
