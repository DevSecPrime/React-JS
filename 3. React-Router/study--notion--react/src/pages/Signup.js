import React from 'react'
import Template from '../components/Template'
import signUpImage from '../assets/signup.png'
function Signup({ setIsLoggedIn }) {
    return (
        <Template
            title="Join the millions learning to code with StudyNotion for free!"
            desc1="Build Skill for today, tomorrow, and beyond."
            desc2="Education is future-proof to your carrer"
            formtype="signup"
            image={signUpImage}
            setIsLoggedIn={setIsLoggedIn}

        />
    )
}

export default Signup
