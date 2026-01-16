import RestaurantProfile from "./components/restaurant/RestaurantProfile";
import MenuManager from "./components/restaurant/MenuManager";
import OrderDashboard from "./components/restaurant/OrderDashboard";

export default function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Restaurant Service</h1>

      {/* Example usage */}
      <RestaurantProfile restaurantId={1} />

      <div className="mt-6">
        <MenuManager restaurantId={1} />
      </div>

      <div className="mt-6">
        <OrderDashboard />
      </div>
    </div>
  );
}
