import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashBoardPage from "./pages/DashBoardPage";
import ErrorPage from "./pages/ErrorPage";
import { AuthContextProvider } from "./server/context/AuthContext";
import ProtectedRoute from "./server/ProtectedRoute";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

function App() {
  return (
    <AuthContextProvider>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="dashboard" element={<ProtectedRoute><DashBoardPage /></ProtectedRoute>} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </AuthContextProvider>
  );
}

export default App;
