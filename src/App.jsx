import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import TechPage from "./pages/TechPage.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Product from "./pages/Product.jsx";
import ProfilePage from "./components/Profile.jsx";
import NotFound from "./components/NotFound.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index exact element={<HomePage />} />
          <Route path="/tech" element={<TechPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Product />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
