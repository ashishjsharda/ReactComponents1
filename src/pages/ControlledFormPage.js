import React from "react";
export const ControlledFormPage= () => {
return(
    <form>
        <h3>Please enter your information</h3>
        <div>
            <input type="text" id="name" name="name" placeholder="Name" />

        </div>
        <div>
            <input type="text" id="email" name="email" placeholder="Email" />
        </div>
        <div>
            <input type="text"  name="favoritecolor" placeholder="Favorite Color" />
        </div>
    </form>
)
}