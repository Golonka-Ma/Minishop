import React, { useState } from "react";
import styles from './LoginScreen.module.scss'
import { useNavigate } from "react-router-dom";
import {AppRoutes} from "../../assets/Constants";
import {getAllUsers} from "../../services/UserService";

const LoginScreen = () => {
    const [inputs, setInputs] = useState({
        login: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(inputs.login && inputs.password) {
            const res = getAllUsers()
                .then((users) => {
                    const matched = users.filter(elem => elem.name === inputs.login)[0];
                    if(matched && matched.password === inputs.password) {
                        localStorage.setItem('logged_user', JSON.stringify(inputs));
                        navigate(AppRoutes.ROOT);
                    }
                })
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
                    <div className={styles.subForm}>
                        <span>No account?</span><button onClick={() => navigate(AppRoutes.REGISTER)}>Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginScreen;