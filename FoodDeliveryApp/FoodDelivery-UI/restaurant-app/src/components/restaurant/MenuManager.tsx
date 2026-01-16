import { useEffect, useState } from "react";
import { getMenu } from "../../services/Restaurant.service";
import type { MenuItem } from "../../types/Restaurant";

export default function MenuManager({
  restaurantId,
}: {
  restaurantId: number;
}) {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMenu(restaurantId)
      .then((res) => setMenu(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [restaurantId]);

  if (loading) return <p>Loading menu...</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Menu Manager</h2>
      <ul className="space-y-2">
        {menu.map((item) => (
          <li key={item.id} className="border p-2 rounded flex justify-between">
            <span>
              {item.name} — ₹{item.price}
            </span>
            <span
              className={`px-2 py-1 rounded text-sm ${
                item.available ? "bg-green-200" : "bg-red-200"
              }`}
            >
              {item.available ? "Available" : "Unavailable"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
