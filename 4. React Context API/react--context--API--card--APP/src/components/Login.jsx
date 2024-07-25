import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext'; // Ensure correct import path

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(AppContext);

    function submitHandler(event) {
        event.preventDefault();
        setUser({ userName, password });
    }

    return (
        <div>
            <h2>Login</h2>
            <input
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
                type='text'
                placeholder='username'
            />
            <br /><br />
            <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type='password'
                placeholder='password'
            />
            <br /><br />
            <input type='submit' onClick={submitHandler} />
        </div>
    );
};

export default Login;
