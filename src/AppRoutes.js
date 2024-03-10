import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import FoodPage from "./pages/Food/FoodPage";
import CartPage from "./pages/Cart/CartPage";
import LoginPage from './pages/Login/LoginPage';
import FormPage from "./pages/Form/FormPage";
import FormsList from "./components/FormsList/FormsList";
import AdminPage from "./pages/Admin/AdminPage";
// import OrderPage from './pages/Form/OrderPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search/:searchTerm" element={<HomePage />} />
      {/*'search' is a constant term seen in the address bar. 'searchTerm' a wrote parameter that we can extract from the homePage and use to search*/}
      <Route path="/tag/:tag" element={<HomePage />} />
      <Route path="/food/:id" element={<FoodPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/form" element={<FormPage />} />
      {/* <Route path="/order" element={<OrderPage/>} />     */}
      <Route path="/admin" element={<AdminPage />}>
        <Route index element={<FormsList />} />
      </Route>
    </Routes>
  );
}
