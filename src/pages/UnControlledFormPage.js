import React from "react";
export const UnControlledFormPage = () => {
    const nameInputRef = React.useRef();
    const emailInputRef = React.useRef();

    return (
        <div>
            <h1>UnControlled Form Page</h1>
            <form>
                <input ref={nameInputRef} type="text" placeholder="Name" />
                <input ref={emailInputRef} type="text" placeholder="Email" />
                <input type="text" placeholder="Phone" />
                <input type="text" placeholder="Address" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}