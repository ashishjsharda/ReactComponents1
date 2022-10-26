import React from "react";
export const UnControlledFormPage = () => {
    return (
        <div>
            <h1>UnControlled Form Page</h1>
            <form>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Phone" />
                <input type="text" placeholder="Address" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}