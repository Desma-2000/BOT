import React from "react";
import Botcard from './Botcard'
function BotCollection(bots ,AddMyBot) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
       {bots.map((bot)=>(
          <Botcard key= {bot.id} bot={bot} botfunction ={AddMyBot}/>
        ))}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
