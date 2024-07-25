import React from 'react'
import { Outlet } from 'react-router-dom'

function MainHeader() {
    return (

        // we can use <Outlet /> to render child routes in parents routes  
        //awlays use <Outlet /> in parent route
        <div>
            <Outlet />
            
        </div>

    )
}

export default MainHeader
