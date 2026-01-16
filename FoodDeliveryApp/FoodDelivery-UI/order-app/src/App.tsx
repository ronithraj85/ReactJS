import OrderList from "./components/order/OrderList";
import OrderDetails from "./components/order/OrderDetails";

export default function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Order Service</h1>

      {/* Example usage */}
      <OrderList userId={1} />

      <div className="mt-6">
        <OrderDetails orderId={101} />
      </div>
    </div>
  );
}
