import './App.css'
import axios from "axios";
import Headr from "./Headr";
import { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState([]);
  async function getData() {
    const responce = await axios
      .get("https://dummyjson.com/products")
      .then((res) => res.data);
    setData(responce.products);
  }

  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <>
      <Header />
      {data.map((obj) => (
        <>
          <div className="product">
            <img src={obj.thumbnail} width={100} />
            <h1>{obj.title}</h1>
            <p>{obj.price}</p>
            <h3>{obj.brand}</h3>
          </div>
        </>
      ))}
    </>
  );
}

export default App;
