import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardDonatur from "./pages/DashboardDonatur";
import DashboardRelawan from "./pages/DashboardRelawan";

function App() {
    const { user } = useAuth();

    return (
        <Routes>
            {/* ===================== PUBLIC ROUTES (dengan Navbar & Footer) ===================== */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route
                    path="/login"
                    element={
                        user
                            ? <Navigate to={user.role === "donatur" ? "/dashboard/donatur" : "/dashboard/relawan"} replace />
                            : <Login />
                    }
                />
                <Route
                    path="/register"
                    element={
                        user
                            ? <Navigate to={user.role === "donatur" ? "/dashboard/donatur" : "/dashboard/relawan"} replace />
                            : <Register />
                    }
                />
            </Route>

            {/* ===================== PROTECTED ROUTES — DONATUR ===================== */}
            <Route element={<ProtectedRoute role="donatur" />}>
                <Route element={<AdminLayout />}>
                    <Route path="/dashboard/donatur" element={<DashboardDonatur />} />
                </Route>
            </Route>

            {/* ===================== PROTECTED ROUTES — RELAWAN ===================== */}
            <Route element={<ProtectedRoute role="relawan" />}>
                <Route element={<AdminLayout />}>
                    <Route path="/dashboard/relawan" element={<DashboardRelawan />} />
                </Route>
            </Route>

            {/* Catch-all: redirect ke home */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default App;
