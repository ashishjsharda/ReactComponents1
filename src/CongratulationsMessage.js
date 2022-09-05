import React from 'react'
export const CongratulationsMessage =({numberOfClicks,threshold}) =>{
    return numberOfClicks>= threshold
        ?<h3>Congratulations ! You have successfully completed this exercise!</h3>
        :null;

};