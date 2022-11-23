import { Routes, Route } from "react-router-dom"
import { AuthContextProvider } from "./server/AuthContext";
import ProtectedRoute from "./server/ProtectedRoute";
import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import ForgotPassword from "./components/user/ForgotPassword";
import Error from "./components/error/Error";
import Dashboard from "./components/user/Dashboard";
import LandingPage from "./components/user/LandingPage";

function App() {
  return (
    <AuthContextProvider>

      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />

    </AuthContextProvider>
  );
}

export default App;
