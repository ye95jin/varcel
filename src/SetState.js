import { useState } from "react";

function SetState() {

    console.log("component in");

    let changeSubject = "React"

    let [comment, setState] = useState("JavaScript");

    let buttonStyle = {
        marginTop: 20,
        padding: 10,
        fontSize: 14,
        backgroundColor: "#999",
        color: "#fff",
        border: "none",
        cursor: "pointer"
    };

    let changeState = () => {
        setState(changeSubject);
    };

    return (
        <>
            <p>{comment}</p>
            <button style={buttonStyle} onClick={changeState}>State 변경</button>
        </>
    );
}

export default SetState;