import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./server/user/contexts/AuthContext";
import DashBoardPage from "./pages/DashBoardPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <AuthProvider>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="dashboard" element={<DashBoardPage />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>

    </AuthProvider>
  );
}

export default App;
