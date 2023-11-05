import General from "./Components/General";
import Entertainment from "./Components/Entertainment";
import Sports from "./Components/Sports";
import Science from "./Components/Science";
import Health from "./Components/Health";
import Technology from "./Components/Technology";
import Business from "./Components/Business";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");

  const getCategory = (data) => {
    setCategory(data);
  };

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=IN&category=${category}&apiKey=enterYourAPIKeyHere`
      )
      .then((response) => {
        setData(response.data.articles);
      });
  }, [category]);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<General getCategory={getCategory} data={data} />}
          ></Route>
          <Route
            path="/entertainment"
            element={<Entertainment getCategory={getCategory} data={data} />}
          ></Route>
          <Route
            path="/science"
            element={<Science getCategory={getCategory} data={data} />}
          ></Route>
          <Route
            path="/sports"
            element={<Sports getCategory={getCategory} data={data} />}
          ></Route>
          <Route
            path="/health"
            element={<Health getCategory={getCategory} data={data} />}
          ></Route>
          <Route
            path="/technology"
            element={<Technology getCategory={getCategory} data={data} />}
          ></Route>
          <Route
            path="/business"
            element={<Business getCategory={getCategory} data={data} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
