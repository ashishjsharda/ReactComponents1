import React,{useState} from "react";
export const ControlledFormPage= () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [favoriteColor,setFavoriteColor]=useState("");
return(
    <form>
        <h3>Please enter your information</h3>
        <div>
            <input type="text" id="name" name="name" placeholder="Name"
            onChange={event => setName(event.target.value)}/>

        </div>
        <div>
            <input type="text" id="email" name="email" placeholder="Email" />
        </div>
        <div>
            <input type="text"  name="favoritecolor" placeholder="Favorite Color" />
        </div>
        <button> Submit</button>
    </form>
)
}