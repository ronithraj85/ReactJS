import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedLayout from "./components/ProtectedLayout";
import RoleRoute from "./components/RoleRoute";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";

// Remote imports
import CustomerDashboard from "../../user-app/src/components/user/CustomerDashboard";
import CustomerOrders from "../../user-app/src/components/user/CustomerOrders";
import UserProfile from "../../user-app/src/components/user//UserProfile";

import OwnerDashboard from "../../restaurant-app/src/components/restaurant/OwnerDashboard";
import RestaurantProfile from "../../restaurant-app/src/components/restaurant/RestaurantProfile";

import OrderList from "../../order-app/src/components/order/OrderList";
import OrderDetails from "../../order-app/src/components/order/OrderDetails";
import Unauthorized from "./components/Unauthorized";
import NotFound from "./components/NotFound";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <Router>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 1000, // 👈 auto-dismiss after 3 seconds
        }}
      />{" "}
      {/* 👈 global toast container */}
      <Routes>{/* routes */}</Routes>
      <Routes>
        {/* Public */}
        <Route path="/login" element={<LoginPage />} />

        {/* Landing */}
        <Route
          path="/"
          element={
            <ProtectedLayout>
              <LandingPage />
            </ProtectedLayout>
          }
        />

        {/* Customer */}
        <Route
          path="/customer-dashboard"
          element={
            <ProtectedLayout>
              <CustomerDashboard />
            </ProtectedLayout>
          }
        />
        <Route
          path="/customer-dashboard/orders"
          element={
            <ProtectedLayout>
              <RoleRoute role="CUSTOMER">
                <CustomerOrders />
              </RoleRoute>
            </ProtectedLayout>
          }
        />
        <Route
          path="/customer-dashboard/profile"
          element={
            <ProtectedLayout>
              <RoleRoute role="CUSTOMER">
                <UserProfile userId={1} />
              </RoleRoute>
            </ProtectedLayout>
          }
        />

        {/* Owner */}
        <Route
          path="/owner-dashboard"
          element={
            <ProtectedLayout>
              <OwnerDashboard />
            </ProtectedLayout>
          }
        />
        <Route
          path="/owner-dashboard/restaurant"
          element={
            <ProtectedLayout>
              <RoleRoute role="OWNER">
                <RestaurantProfile restaurantId={1} />
              </RoleRoute>
            </ProtectedLayout>
          }
        />

        {/* Orders */}
        <Route
          path="/orders"
          element={
            <ProtectedLayout>
              <RoleRoute role="CUSTOMER">
                <OrderList userId={1} />
              </RoleRoute>
            </ProtectedLayout>
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route
          path="/orders/:id"
          element={
            <ProtectedLayout>
              <RoleRoute role="CUSTOMER">
                <OrderDetails orderId={101} />
              </RoleRoute>
            </ProtectedLayout>
          }
        />

        {/* Unauthorized */}
        <Route
          path="/unauthorized"
          element={
            <p className="p-10 text-center">
              You are not authorized to view this page.
            </p>
          }
        />
      </Routes>
    </Router>
  );
}
