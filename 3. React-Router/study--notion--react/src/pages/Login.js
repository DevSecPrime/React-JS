import React from 'react'
import Template from '../components/Template'
import loginImage from '../assets/login.png'

function Login({ setIsLoggedIn }) {
    return (
        <Template
            title="Welcome Back!"
            desc1="Build Skill for today, tomorrow, and beyond."
            desc2="Education is future-proof to your carrer"
            formtype="login"
            image={loginImage}
            setIsLoggedIn={setIsLoggedIn}
        />
    )
}

export default Login
