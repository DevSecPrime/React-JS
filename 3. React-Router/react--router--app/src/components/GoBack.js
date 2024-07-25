import React from 'react'
import { useNavigate } from 'react-router-dom'

function GoBack() {

    const navigate = useNavigate();
    function backHandler() {
        navigate(-1);

    }
    return (
        <div>
            <button onClick={backHandler}>Go Back</button>
        </div>
    )
}

export default GoBack
