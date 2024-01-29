import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((res) => setData(res.data.books))
      .catch((err) => console.error(err.message));
  }, []);

  console.log(data);
  return (
    <div>
      {data.map((ele) => {
        return (
          <div key={ele.id} className="bb">
            <h1>{ele.title}</h1>
            <div>
              <img src={ele.imageLinks.thumbnail}/>
              <p>{ele.description}</p>
            </div>

            {ele.authors.map(ele => ele + "  ")}
          </div>
        );
      })}
    </div>
  );
}

export default App;
