import React from "react";
import { useState } from "react";
import { useEffect } from "react";
function Arr({tm,qu}) {
  const [question, setquestion] = useState(30);

useEffect(()=>{
if (question===0){ 
  tm(true) 
  setTimeout(()=>{tm(false)},5000)


}

 const inte= setInterval(() => {
    setquestion(question - 1);
  }, 1000);
  return ()=> clearInterval(inte)

},[question,tm])

useEffect(()=>{
  setquestion(30)
},[qu])

  return question;
}

export default Arr;
