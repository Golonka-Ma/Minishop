import React, { useState } from "react";
import styles from './LoginScreen.module.scss'
import { useNavigate } from "react-router-dom";
import AppRoutes from "../../assets/Constants";

const LoginScreen = () => {
    const [inputs, setInputs] = useState({
        login: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(inputs.login === 'admin' && inputs.password === 'admin') {
            const puttable = JSON.stringify(inputs);
            localStorage.setItem('logged_user', puttable);
            navigate(AppRoutes.ROOT);
        };
    }

    return(
        <div className={styles.wrapper}>
            <div className={styles.formWrapper}>
                <div className={styles.bar}></div>
                <form onSubmit={(e) => handleFormSubmit(e)} className={styles.form} >
                    <label htmlFor='login'>Login</label>
                    <input 
                        type='text' 
                        id='login'
                        placeholder='Login'
                        onChange={(e) => setInputs({...inputs, login: e.target.value})}/>

                    <label htmlFor='password'>Password</label>
                    <input 
                        type='password' 
                        id='password' 
                        placeholder='Password'
                        onChange={(e) => setInputs({...inputs, password: e.target.value})}/>

                    <button>Sign in</button>
                </form>
            </div>
        </div>
    );
}

export default LoginScreen;