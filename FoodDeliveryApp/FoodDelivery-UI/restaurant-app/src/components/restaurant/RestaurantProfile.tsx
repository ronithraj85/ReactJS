import { useEffect, useState } from "react";
import { getRestaurantById } from "../../services/Restaurant.service";
import type { Restaurant } from "../../types/Restaurant";

export default function RestaurantProfile({
  restaurantId,
}: {
  restaurantId: number;
}) {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);

  useEffect(() => {
    getRestaurantById(restaurantId)
      .then((res) => setRestaurant(res.data))
      .catch((err) => console.error(err));
  }, [restaurantId]);

  if (!restaurant) return <p>Loading restaurant profile...</p>;

  return (
    <div className="p-6 border rounded shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Restaurant Profile</h2>
      <p>
        <strong>Name:</strong> {restaurant.name}
      </p>
      <p>
        <strong>Email:</strong> {restaurant.email}
      </p>
      <p>
        <strong>Cuisine:</strong> {restaurant.cuisine}
      </p>
      <p>
        <strong>Address:</strong> {restaurant.address}
      </p>
      <p>
        <strong>Status:</strong> {restaurant.status}
      </p>
    </div>
  );
}
