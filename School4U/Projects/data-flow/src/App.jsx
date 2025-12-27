import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";

function App() {
  let name = "Manas Kumar Lal";
  return (
    <div>
      <h1>Hello HTML</h1>
      <p>My name is {name}</p>
      <br />
      <Header />
      <Layout />
      <Footer />
    </div>
  );
}

export default App;
