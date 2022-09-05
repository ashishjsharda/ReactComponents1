import React from 'react'
export const CongratulationsMessage =({numberOfClicks,threshold}) =>{
    return numberOfClicks>= threshold
        ?<h3>Congratulations ! You have reached the threshold -  {threshold}  clicks!</h3>
        :null;

};