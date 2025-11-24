import { useState } from "react";
import { Login } from "./pages/login/login";
import { Home } from "./pages/home/home";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {isAuthenticated ? (
        <Home />
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
