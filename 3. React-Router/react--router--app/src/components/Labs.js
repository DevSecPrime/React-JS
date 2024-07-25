import React from 'react'
import { useNavigate } from 'react-router-dom'
import GoBack from './GoBack';

function Labs() {
    const navigate = useNavigate();
    function clickHandler(){
        navigate("/about")
    }
    return (
        <div>
            <h1>Hello Guys...! <br />This is <span style={{ color: "orange" }}>MY LABs</span> Page.......... <br /> This is LABs COMPONENT</h1>

            <button onClick={clickHandler}>Move to AboutUS</button>
            <GoBack/>
        </div>
    )
}

export default Labs
