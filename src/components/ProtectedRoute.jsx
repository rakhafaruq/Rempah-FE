import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export default function ProtectedRoute({ role }) {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-stone-50">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-gray-500 font-medium">Memuat...</p>
                </div>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (role && user.role !== role) {
        const redirectTo =
            user.role === "donatur" ? "/dashboard/donatur" : "/dashboard/relawan";
        return <Navigate to={redirectTo} replace />;
    }

    return <Outlet />;
}
