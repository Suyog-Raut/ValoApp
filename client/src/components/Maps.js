import { useState, useEffect } from "react";
import ElementCard from "./ElementCard";

function Maps() {
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = "/api/maps";
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        console.log(data.data);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, [setData, setLoading]);

  if (loading) return <p>Loading...</p>;

  if (!Data) return <p>Server down :(</p>;

  return (
    <div className="center">
      <div className="">
        <h2 className="outline-text">Maps</h2>

        {Data.map((s) => (
          <ElementCard
            name={s.displayName}
            img={s.splash}
            coord={s.coordinates}
            icon={s.displayIcon}
          />
        ))}
        <hr />
      </div>
    </div>
  );
}

export default Maps;
