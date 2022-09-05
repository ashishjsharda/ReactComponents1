import React from 'react'
export const CongratulationsMessage =({numberOfClicks,threshold}) =>{
    return numberOfClicks>= threshold
        ?<h3>Congratulations ! You have reached {threshold} number of clicks!</h3>
        :null;

};