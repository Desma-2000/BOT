import React,{useEffect ,useState }from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots,setBots] = useState([])
  const [mybots,setMyBots] = useState([])
 useEffect(() =>{
  fetch('http://localhost:8002/bots' )
  .then((response )=>response.json())
  .then((data)=> setBots(data))
 } , []) 
 //add to my bot 
 const AddMyBot = (bot) => {
  if (!mybots.includes(bot)){
    setMyBots([...mybots ,bot ])
  }

 }
 // removeBot
 const removeBot = (bot) => {
  setMyBots( mybots.filter( mybots => mybots.id !== bot.id))
 }
  return (
    <div>
      {!bots.length ? <h1>Loading...</h1>: null}
      <YourBotArmy bots={mybots} removeBot={removeBot}/>
      <BotCollection  bots={bots} botFunction={AddMyBot}/>
    </div>
  )
}

export default BotsPage;
