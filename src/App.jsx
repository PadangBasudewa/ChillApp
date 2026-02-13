import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./util/ProtectedRoute";
import DashboardFilm from "./pages/DashboardFilm";
import Profile from "./pages/Profile";
import Subscription from "./pages/Subscription";
import Payment from "./pages/Payment";
import ScrollToTop from "./util/ScrollToTop";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardFilm />
            </ProtectedRoute>
          }
        />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/subscription"
          element={
            <ProtectedRoute>
              <Subscription />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <ScrollToTop />
              <Payment />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Toaster position="top-center" />
    </>
  );
}

export default App;
