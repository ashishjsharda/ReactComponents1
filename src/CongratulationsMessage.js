import React from 'react'
export const CongratulationsMessage =({numberOfClicks,threshold,onHide}) =>{
    return numberOfClicks>= threshold
        ?<>
        <h1>Congratulations ! You have reached the threshold -  {threshold}  clicks!</h1>
        <button onClick={onHide}>Hide</button>
        </>
        :null;


};