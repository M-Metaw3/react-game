import './App.css';
import React from 'react';
import axios from "axios";
import { useState } from 'react'
import { useEffect } from 'react'
import Question from './Question';
import Arr from './Arr';
function App() {

  const [Class, setClass]=useState(1)
// klsaml;
  const [time,settime]=useState(false)
  const [earned,setearned]=useState("$0")


  const question =
  [
    {
      id:1,
      q:"metawea",
      answerr:[
        {
          answer:"25",
          checker:false
        },
        {
          answer:"java",
          checker:true
        },
        {
          answer:"mm",
          checker:false
        },
        {
          answer:"كل ما سبق",
          checker:false
        },
      ]
    },
    {
      id:2,
      q:"metawea",
      answerr:[
        {
          answer:"25",
          checker:false
        },
        {
          answer:"java",
          checker:true
        },
        {
          answer:"mm",
          checker:false
        },
        {
          answer:"كل ما سبق",
          checker:false
        },
      ]
    },
    {
      id:3,
      q:"metawea",
      answerr:[
        {
          answer:"25",
          checker:false
        },
        {
          answer:"java",
          checker:true
        },
        {
          answer:"mm",
          checker:false
        },
        {
          answer:"كل ما سبق",
          checker:false
        },
      ]
    },
    {
      id:4,
      q:"metawea",
      answerr:[
        {
          answer:"25",
          checker:false
        },
        {
          answer:"java",
          checker:true
        },
        {
          answer:"mm",
          checker:false
        },
        {
          answer:"كل ما سبق",
          checker:false
        },
      ]
    },
    {
      id:5,
   
      q:"metawea",
      answerr:[
        {
          answer:"25",
          checker:false
        },
        {
          answer:"java",
          checker:true
        },
        {
          answer:"mm",
          checker:false
        },
        {
          answer:"كل ما سبق",
          checker:false
        },
      ]
    },
    {
      id:6,
      q:"metawea",
      answerr:[
        {
          answer:"25",
          checker:false
        },
        {
          answer:"java",
          checker:true
        },
        {
          answer:"mm",
          checker:false
        },
        {
          answer:"كل ما سبق",
          checker:false
        },
      ]
    },
    {
      id:7,
      q:"metawea",
      answerr:[
        {
          answer:"25",
          checker:false
        },
        {
          answer:"java",
          checker:true
        },
        {
          answer:"mm",
          checker:false
        },
        {
          answer:"كل ما سبق",
          checker:false
        },
      ]
    },
    {
      id:8,
      q:"metawea",
      answerr:[
        {
          answer:"25",
          checker:false
        },
        {
          answer:"java",
          checker:true
        },
        {
          answer:"mm",
          checker:false
        },
        {
          answer:"كل ما سبق",
          checker:false
        },
      ]
    },
    {
      id:9,
      q:"metawea",
      answerr:[
        {
          answer:"25",
          checker:false
        },
        {
          answer:"java",
          checker:true
        },
        {
          answer:"mm",
          checker:false
        },
        {
          answer:"كل ما سبق",
          checker:false
        },
      ]
    },
    {
      id:10,
      q:"metawea",
      answerr:[
        {
          answer:"25",
          checker:false
        },
        {
          answer:"java",
          checker:true
        },
        {
          answer:"mm",
          checker:false
        },
        {
          answer:"كل ما سبق",
          checker:false
        },
      ]
    },
    {
      id:11,
      q:"metawea",
      answerr:[
        {
          answer:"25",
          checker:false
        },
        {
          answer:"java",
          checker:true
        },
        {
          answer:"mm",
          checker:false
        },
        {
          answer:"كل ما سبق",
          checker:false
        },
      ]
    },
    {
      id:12,
      q:"777",
      answerr:[
        {
          answer:"b",
          checker:false
        },
        {
          answer:"c",
          checker:true
        },
        {
          answer:"b",
          checker:false
        },
        {
          answer:"a",
          checker:false
        },
      ]
    },
    
  ]

  // const [food,setfood]=useState([])
  // useEffect(()=>{  axios.get("https://the-trivia-api.com/api/questions").then((res)=>{

  //   setfood(res.data)
  //   })},[])

// console.log(food)
const side=[
{id:1 , money:"   $100"},
{id:2 , money:"   $200"},
{id:3 , money:"   $300"},
{id:4 , money:"   $500"},
{id:5 , money:"   $1000"},
{id:6 , money:"   $2000"},
{id:7 , money:"   $5000"},
{id:8 , money:"   $10000"},
{id:9 , money:"   $20000"},

{id:10 , money:"   $50000"},
{id:11 , money:"   $100000"},
{id:12 , money:"   $200000"},
{id:13 , money:"   $250000"},

{id:14 , money:"   $500000"},
{id:15 , money:"   $1000000"},

].reverse()



useEffect(()=>{

    Class>1 &&
    setearned(side.find((m)=>m.id ===Class-1).money)
  
  
  },[setClass,side])
  return (

    
    <div className="App">
      {time?<h1 className='ern'>you earned {earned}</h1> : (

<div className='main'>
<div className="up">
  <div className="timer">
 <Arr tm={settime} qu={Class}/>
  </div>

</div>
<div className="bottom">

<Question que={question} settim={settime} setmonnum={setClass} moneynum = {Class}/>
</div>

</div> 

      )}






      <div className='money'>
        <ul >
          {side.map((el,i)=>{


return(
<li key={i} className={Class===el.id?'active' :"side"}>
<span > {el.id}</span>
<span>{el.money}</span>

</li>
)
          })}
       
        </ul>
      </div>

    </div>
  );
}

export default App;
