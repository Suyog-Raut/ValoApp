import {useState,useEffect} from 'react';



export default function Gamemode() {
  const [Data,setData] = useState([]);
 const [loading,setLoading] = useState(true);


  useEffect(()=> {
    const apiUrl = "/gamemodes";
       fetch(apiUrl)
         .then((res) => res.json())
         .then((data) => {
           setData(data.data);
           console.log(data.data);
         }).catch((error) => console.log(error)).finally(()=>{
           setLoading(false);
         });
  },[setData,setLoading])

if(loading) return <p>Loading...</p>
if(!Data) return <p>Server down :(</p>
return (
  <div className="">
  <h2 className="outline-text"> Game Modes </h2>

  { Data.map(s =>
     <div className="zoom gamediv">
  <div className="parallelogram"><img width="50px" padding="0" src={s.displayIcon} alt="logo" /></div>
  <div className="adjust border3">
  <h1>{s.displayName}</h1>
  <p>{s.duration}</p><p>Orb Count : {s.orbCount}</p></div>
    </div>
  ) }

  </div>
)

}


//
