import { useState, useEffect } from "react";
import InfoCard from "./InfoCard";

function Agents() {
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = "/api/agents";
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
        <h2 className="outline-text">AGENTS</h2>

        {Data.map(
          (s) =>
            s.isPlayableCharacter && (
              <InfoCard
                name={s.displayName}
                description={s.description}
                abilities={s.abilities}
                role={s.role}
                img={s.fullPortrait}
              />
            )
        )}
        <hr />
      </div>
    </div>
  );
}

export default Agents;
