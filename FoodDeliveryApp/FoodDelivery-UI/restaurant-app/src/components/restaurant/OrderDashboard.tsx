export default function OrderDashboard() {
  return (
    <div className="p-6 border rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Live Orders</h2>
      <p>Here you can show incoming orders for the restaurant in real-time.</p>
      {/* Later: integrate with order-service for live updates */}
    </div>
  );
}
