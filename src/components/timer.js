import React from "react";
import { useState } from "react";

const Chrono = function(){
    const [ourTime, getOurTime] = React.useState('');
    let current = new Date();
    let timerNow = current.toLocaleTimeString();

    

    return(
        <div>
            <p>{setInterval(getOurTime(timerNow), 1000)}</p>
        </div>
    )
}

export default Chrono;