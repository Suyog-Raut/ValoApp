
function ElementCard(props){
return (
<div className="card">
<img src={props.img} width="600px" alt="map" /><hr />
<h3>{props.name}</h3>
<p>{props.coord}</p>
{(props.icon) && <div>
<p>Layout :</p>
<img src={props.icon} width="500px" alt="map" />  </div>}
  </div>
)
}


export default ElementCard;
