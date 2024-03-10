import React, { useState } from "react";
import classes from "./loginPage.module.css";
import Title from "../../components/Title/Title";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [inputs, setInputs] = useState({})
    const [err, setErr] = useState(false)
    const navigate = useNavigate()

    const login = async() => {
        const {data} = await axios.post('/api/users/login', inputs)
        if (data.loggedIn) {
            setErr(false);
            navigate('/admin')
        } else {
            setErr(true);
        }
    }
  return (
    <div>
      <Title title="Admin Panel Login" margin="24px 12px" />
      <div className={classes.login}>
        {err && <p style={{color: "red"}}>Wrong Credentials</p>}
        <div>
            <p>Email: </p>
            <input onChange={(e)  => setInputs({...inputs, email: e.target.value})}/>
        </div>
        <div>
            <p>Password: </p>
            <input onChange={(e)  => setInputs({...inputs, password: e.target.value})}/>
        </div>
        <button onClick={login}>Log In</button>
      </div>
    </div>
  );
};

export default LoginPage;