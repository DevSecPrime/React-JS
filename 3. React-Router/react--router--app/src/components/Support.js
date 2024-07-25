import React from 'react'
import { useNavigate } from 'react-router-dom'
import GoBack from './GoBack';
function Support() {

    const navigate = useNavigate();

    function clickHandler() {
        navigate("/labs")
    }

    // function backHandler() {
    //     navigate(-1);
    // }
    return (
        <div>
            <h1>Hello Guys...! <br />This is MY <span style={{ color: "magenta" }}> SUPPORT PAGE</span>...... <br /> This is SUPPORT COMPONENT</h1>

            <button onClick={clickHandler}>Move to Labs</button>
            {/* <button onClick={backHandler}>Go Back</button> */}
            <GoBack />
        </div>
    )
}

export default Support
