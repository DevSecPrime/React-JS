import React from 'react'
import { useNavigate } from 'react-router-dom'
import GoBack from './GoBack';

function AboutUS() {

    const navigate = useNavigate();
    //useNavigate is used to move from one page to another page --> can navigate to differentpages
    function clickHandler() {
        navigate("/support");
    }

    // function backHandler() {
    //     navigate(-1);
    // }
    return (
        <div>
            <h1>Hello Guys...! <br /> This is <span style={{ color: "red" }}>ABOUT US</span> PAGE........ <br />This is AboutUS COMPONENT</h1>
            <button onClick={clickHandler}>Move to Support</button>
            {/* <button onClick={backHandler}>Go Back</button> */}
            <GoBack />
        </div>
    )
}

export default AboutUS
