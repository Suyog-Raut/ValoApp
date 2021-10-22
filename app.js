

const express = require("express");
const fetch = require('node-fetch');
const cors = require("cors");

 require("dotenv").config();
const cloudinary = require("cloudinary").v2;


cloudinary.config( {
  cloud_name : process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret : process.env.API_SECRET,
  secure: true
});
const app = express();

// Cors for CORS handling
app.use(cors());

let agent=[] ;
let map=[] ;
let gamemode=[] ;
let leaderboard=[];
let actId="";

async function convertDisplayImage(x,y){
   let pic = await cloudinary.uploader.upload(
      x,
      (options = {
         public_id: y,
      }),
   )
   return pic.url;
}

const fetchData = async() => {
    const res = await fetch("https://valorant-api.com/v1/agents")
    const c = await res.json();
    agent=c;
    agent.data.map(s  => {
        if (s.fullPortrait) {
         s.fullPortrait = cloudinary.url(s.displayName);
       }
       if (s.role) {
        s.role.displayIcon = cloudinary.url(s.role.displayName);
       }
       s.abilities.map(m =>{
         m.displayIcon = cloudinary.url(m.displayName);
       })
    })
 
} 
const fetchData1 = async() => {
   const res2 = await fetch ( "https://valorant-api.com/v1/gamemodes")
   const b = await res2.json();
   gamemode=b;
  gamemode.data.map(s  => {
      if (s.displayIcon) {
       s.displayIcon = cloudinary.url(s.displayName);
     }
     else 
     s.displayIcon = cloudinary.url("https://res.cloudinary.com/dpmbohr7g/image/upload/Escalation")
  })
}
const fetchData2 = async() => {
   const res3 = await fetch ( "https://valorant-api.com/v1/maps")
    const a = await res3.json();
    map=a;
   map.data.map(s => {
      if (s.displayIcon) {
        s.displayIcon = cloudinary.url(s.displayName);
      }
      if (s.splash) {
         s.splash = cloudinary.url(s.coordinates);
      }
   })
}
const fetchData3 = async() => {
   const res4 = await fetch ( "https://valorant-api.com/v1/seasons")
    const z = await res4.json();
    let x = z.data.length - 10;
    actId = z.data[x].uuid;
    let URL= "https://api.henrikdev.xyz/valorant/v1/leaderboard/ap"
    const res5 = await fetch(URL)
    const p = await res5.json();
    leaderboard = p;

}
fetchData();
fetchData1();
fetchData2();
fetchData3();
app.get('/agents', function(req,res)
{ 
   res.send(agent)
}
  
)

app.get('/gamemodes', function(req,res)
{
   res.send(gamemode);
}
)
app.get('/maps', function(req,res)
{
   res.send(map);
}
)

app.get('/lead', function(req,res)
{
  res.send(leaderboard);
}
)
const port = process.env.PORT || 3001;


app.listen(port, () => {
	console.log("Server is running on port:", port);
});