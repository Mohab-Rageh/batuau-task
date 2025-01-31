import { useEffect, useState } from "react";
import api from "./api";

function App() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    api
      .get("/hello")
      .then((response) => setMessage(response.data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
