import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoleRoute from "./components/RoleRoute";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import ProtectedLayout from "./components/ProtectedLayout";

// Remote imports
import OrderDashboard from "../../restaurant-app/src/components/restaurant/OrderDashboard";
import UserProfile from "../../user-app/src/components/user/UserProfile";
import UsersTable from "../../user-app/src/components/user/UserTable";
import OrderList from "../../order-app/src/components/order/OrderList";
import OrderDetails from "../../order-app/src/components/order/OrderDetails";
import RestaurantProfile from "../../restaurant-app/src/components/restaurant/RestaurantProfile";
import MenuManager from "../../restaurant-app/src/components/restaurant/MenuManager";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected routes */}
        <Route
          path="/"
          element={
            <ProtectedLayout>
              <LandingPage />
            </ProtectedLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedLayout>
              <RoleRoute role="CUSTOMER">
                <UserProfile userId={1} />
              </RoleRoute>
            </ProtectedLayout>
          }
        />
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

        {/* Owner routes */}
        <Route
          path="/restaurant"
          element={
            <ProtectedLayout>
              <RoleRoute role="OWNER">
                <RestaurantProfile restaurantId={1} />
              </RoleRoute>
            </ProtectedLayout>
          }
        />
        <Route
          path="/menu"
          element={
            <ProtectedLayout>
              <RoleRoute role="OWNER">
                <MenuManager restaurantId={1} />
              </RoleRoute>
            </ProtectedLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedLayout>
              <RoleRoute role="OWNER">
                <OrderDashboard />
              </RoleRoute>
            </ProtectedLayout>
          }
        />

        {/* Admin routes */}
        <Route
          path="/users"
          element={
            <ProtectedLayout>
              <RoleRoute role="ADMIN">
                <UsersTable />
              </RoleRoute>
            </ProtectedLayout>
          }
        />

        {/* Unauthorized */}
        <Route
          path="/unauthorized"
          element={<p>You are not authorized to view this page.</p>}
        />
      </Routes>
    </Router>
  );
}
