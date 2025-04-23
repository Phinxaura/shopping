import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart";
import { useAuth } from "../context/AuthContext";
import Header from "../components/Header";

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            isAuthenticated ? <Home /> : <Navigate to="/login" replace />
          }
        />

        <Route
          path="/cart"
          element={
            isAuthenticated ? <Cart /> : <Navigate to="/login" replace />
          }
        />


        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/" : "/login"} replace />}
        />
      </Routes>
    </>
  );
};

export default AppRoutes;
