import Card from "../Card/Card";

import { useEffect, useState } from "react";
import "./MainPage.css";

const MainPage = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://breakingbadapi.com/api/characters");
      const json = await response.json();
      setData(json);
      console.table(json);
    };
    fetchData();
  }, []);

  const filter = (searchBy) => {
    setSearch(searchBy);
  };

  return (
    <div className="mainPge">
      <input
        type="text"
        className="form-control"
        placeholder="Walter White"
        onChange={(e) => filter(e.target.value)}
      />
      <div className="row">
        {data &&
          data.map((item, index) => {
            if (item.name.toLowerCase().includes(search.toLowerCase())) {
              return (
                <div className="col-md-4 col-xs-12" key={index}>
                  <Card character={item} />
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default MainPage;
