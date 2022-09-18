import React,{useEffect} from 'react'
export const CongratulationsMessage =({numberOfClicks,threshold,onHide}) =>{

   useEffect(()=>{
         console.log('CongratulationsMessage useEffect called');
         return ()=>{
              console.log('Unsubscribe from CongratulationsMessage');
         }

   },[]);


    return numberOfClicks>= threshold
        ?<>
        <h1>Congratulations ! You have reached the threshold -  {threshold}  clicks!</h1>
        <button onClick={onHide}>Hide</button>
        </>
        :null;


};