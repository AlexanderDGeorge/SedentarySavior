import { useState } from "react";
import Loader from "./Components/Loader";
import useLocalForage from "./util/useLocalForage.ts";

export default function App() {
  const [loading, setLoading] = useState(true);

  useLocalForage();

  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className="App">
        <h1>Sedentary Savior</h1>
      </div>
    );
  }
}
