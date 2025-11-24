import { useState } from "react";
import Home from "./pages/home/index";
import Login from "./pages/login/index";

function App() {
  const [isAuthenticated] = useState(false);

  return isAuthenticated ? <Home /> : <Login />;
}

export default App;
