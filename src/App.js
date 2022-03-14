import React from "react";
import "./App.scss";
import { getMedicineData } from "./redux/actions/medicines";
import { useDispatch } from "react-redux";

import Home from "./screens/Home";

import "./styles/Home/styles.scss";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getMedicineData());
  }, [dispatch]);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
