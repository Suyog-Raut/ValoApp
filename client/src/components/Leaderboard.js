import {useState} from 'react';
import {Button} from 'react-bootstrap';
import Lead from "./LeadCard.js";

function Leaderboard() {

  const [num,setNum] = useState("")
const [idData,setIdData] = useState([])
const [loading,setLoading] = useState(false)


function getLeaderboard (e) {
  e.preventDefault();
  setLoading(true);
  console.log(idData,num);
  const apiUrl = "/lead";
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      setIdData(data);
      console.log(data);
    }).catch((error) => console.log(error)).finally(()=>{
      setLoading(false);
    });
}


if(loading) return <p>Loading...</p>

if(!idData) return <p>Server down :(</p>

 return (
   <div className="center leader">
  <h2 className="outline-text">Current Leaderboard</h2>
<form >

 <input type="integer" onChange={e=> setNum(e.target.value)} placeholder="Till Rank..." value={num}/>
<Button onClick={getLeaderboard} variant="outline-danger" >Search</Button>

</form>

{idData.slice(0,num).map(
s => 
  <Lead id={s.TitleID} name={s.gameName} tag={s.tagLine} rank={s.leaderboardRank} rating={s.rankedRating} wins={s.numberOfWins} tier={s.competitiveTier}/>
)
}

  </div>
 );
}
export default Leaderboard ;
