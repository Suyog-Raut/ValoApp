import '../css/infocard.css';


function InfoCard(props){
return (

  <div className="card">
   <div className="parallelogram"><h3>{props.name}</h3></div>

   <div >
      <div className="img-wrapper" >
        <img className="portrait" src={props.img} alt="Avatar" />
      </div>
     <div className="pd3 flex2">
       <div className="flex"><img src={props.role.displayIcon} width="50px" alt="Logo" /> <h3>{props.role.displayName}</h3></div>
       <div><h5>Abilities :</h5>
         <ul className="flex">
   {props.abilities.map(s=>
     (s.slot!=="Passive") &&
     <li className="flex"><img src={s.displayIcon} width="50px" alt="Logo" /> <p> {s.displayName} </p></li>
     
   )
   }

         </ul>
       </div>
       <div className="pd3">
        {props.description}
       </div>
     </div>  </div>

 </div>

)
}


export default InfoCard;
