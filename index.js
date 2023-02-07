
import React from 'react';

import ReactDOM  from 'react-dom';
import "./index.css"
// const date = new Date().toLocaleDateString();
// const time = new Date().toLocaleTimeString();
let curDate =new Date();
curDate = curDate.getHours();
let greeting ="";
let cssStyle={};
if(curDate>=1 && curDate<12){
    greeting ="Good Morning";
    cssStyle.color ="Green";
}

else if(curDate>=12 && curDate<14){
    greeting ="Good Afternoon";
    cssStyle.color ="orange";
}
else if(curDate>=15 && curDate<20){
    greeting ="Good Evening";
    cssStyle.color ="blue";
}
else{
    greeting ="Good Night"
    cssStyle.color ="green";
}
   
ReactDOM.render(
    <>
    {/* <h1>Ritika Mishra </h1>
   <h3>{`todays Date ${date}`}</h3>
   <h3>{`todays Date ${time}`}</h3> */}
   <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
   
    </>
    ,document.getElementById("root")

 ); //jsx