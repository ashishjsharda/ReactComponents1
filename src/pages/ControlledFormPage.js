import React,{useState} from "react";
export const ControlledFormPage= () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [favoriteColor,setFavoriteColor]=useState("");
return(
    <form>
        <h3>Please enter your information</h3>
        <div>
            <input type="text" id="name" name="name" placeholder="Name" value={name}
            onChange={event => setName(event.target.value)}/>

        </div>
        <div>
            <input type="text" id="email" name="email" placeholder="Email" value={email}
            onChange={e=>setName(e.target.value)}/>
        </div>
        <div>
            <input type="text"  name="favoritecolor"  id="favoritecolor"placeholder="Favorite Color" value={favoriteColor}
            onChange={e=>setName(e.target.value)}/>
        </div>
        <button onClick={e=>{

            alert(`Your name is ${name}, your email is ${email}, and your favorite color is ${favoriteColor}`)
            e.preventDefault();
        }}> Submit</button>
    </form>
)
}