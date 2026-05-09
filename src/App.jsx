import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HowItWorks from "./pages/HowItWorks";
import Partners from "./pages/Partners";
import DashboardDonatur from "./pages/DashboardDonatur";
import DashboardRelawan from "./pages/DashboardRelawan";
import About from "./pages/about/About";

function App() {
    const { user } = useAuth();

    return (
        <Routes>
            {/* ===================== PUBLIC ROUTES ===================== */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/login"
                    element={
                        user
                            ? <Navigate to={user.role === "donatur" ? "/dashboard/donatur" : "/dashboard/relawan"} replace />
                            : <Login />
                    }
                />
            </Route>
                <Route
                    path="/register"
                    element={
                        user
                            ? <Navigate to={user.role === "donatur" ? "/dashboard/donatur" : "/dashboard/relawan"} replace />
                            : <Register />
                    }
                />

            {/* ===================== PROTECTED — DONATUR ===================== */}
            <Route element={<ProtectedRoute role="donatur" />}>
                <Route element={<AdminLayout />}>
                    <Route path="/dashboard/donatur" element={<DashboardDonatur />} />
                </Route>
            </Route>

            {/* ===================== PROTECTED — RELAWAN ===================== */}
            <Route element={<ProtectedRoute role="relawan" />}>
                <Route element={<AdminLayout />}>
                    <Route path="/dashboard/relawan" element={<DashboardRelawan />} />
                </Route>
            </Route>

            {/* Catch-all */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default App;
