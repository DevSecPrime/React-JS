import React from 'react'


function HOME() {
    return (

        // we can use <Outlet /> to render child routes in parents routes  
        //awlays use <Outlet /> in parent route
        <div>

            <h1>Hello Guys! This is MY <span style={{ color: "grey" }}>HOME PAGE</span>........ <br />HOME COMPONENT</h1>
        </div>
    )
}

export default HOME