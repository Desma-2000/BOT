import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({bots , removeBot}) {
  //your bot army code here...
bots = bots.map((bot)=>(
  <BotCard key={bot.id} bot={bot} botFunction={removeBot}/>

))
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {bots}
          {bots.length ===0 ? <p> no bots</p>: null}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
