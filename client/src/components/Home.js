import 'bootstrap/dist/css/bootstrap.css';
import '../css/h.css';
import Gamemode from './Gamemode.js';

function Home() {

 return (
   <div className="bg-night">
   <div className="head">
  <h1 className="border1" title="VALORANT">VALORANT</h1>
<h3>A competitive 5v5 character-based tactical shooter game with 15+ agents to play.</h3>

</div><hr />
<div className="center">
<Gamemode />
</div>
  </div>

 );
}

export default Home ;
