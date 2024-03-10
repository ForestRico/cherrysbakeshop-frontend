import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import FoodPage from "./pages/Food/FoodPage";
import CartPage from "./pages/Cart/CartPage";
import LoginPage from './pages/Login/LoginPage';
import FormPage from "./pages/Form/FormPage";
import FormsList from "./components/FormsList/FormsList";
import AdminPage from "./pages/Admin/AdminPage";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search/:searchTerm" element={<HomePage />} />
      <Route path="/tag/:tag" element={<HomePage />} />
      <Route path="/food/:id" element={<FoodPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/admin" element={<AdminPage />}>
        <Route index element={<FormsList />} />
      </Route>
    </Routes>
  );
}
