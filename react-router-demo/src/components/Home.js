import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      Home Page <br />
      <button onClick={() => navigate("order-summary")}>Place Order</button>
    </div>
  );
}
export default Home;
