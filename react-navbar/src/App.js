import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    /* The Router component is a higher-order component that provides the routing functionality to the application */
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
