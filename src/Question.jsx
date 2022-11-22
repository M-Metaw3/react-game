import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const Question = ({que,settim,setmonnum,moneynum}) => {

    const [correctwrong,setcorrectwrong]=useState(null)
    const [classs,setcla]=useState('ans')

    const [qustion,setqustion]=useState(que[moneynum-1])


    // console.log(moneynum)
    // console.log(que[moneynum-1])
   

    useEffect(()=>{
        setqustion(que[moneynum-1])
    },[moneynum,que])
    console.log(qustion.ans)


const handelercorr =(e)=>
{
    setcorrectwrong(e)
    setcla('ans active')
   
    setTimeout(()=>{
        setcla(e.checker?'ans correct':'ans wrong')
    },3000)

    if (e.checker) {
        setTimeout(()=>{
            setmonnum(moneynum+1)
        },6000)
    }
    else{
setTimeout(() => {
    settim(true) 
    
}, 6000);
setTimeout(() => {
    settim(false) 
    setmonnum(1)
    
}, 10000);
    }
  

    
}


  return (
    <div className='con'>
      <div className='question'>
 <h3>{qustion.q}</h3>
      </div>
       <div className='answer'>
        
 {qustion.answerr.map((el)=>

    (
        
        <h4 className={correctwrong===el ? classs:"ans"} onClick={()=>handelercorr(el)}>{el.answer}</h4>
      

    )
)}



      </div>
    </div>
  )
}

export default Question
