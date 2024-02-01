import React, {useState} from "react";
import styles from './RegisterScreen.module.scss';
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../assets/Constants";
import {addUser} from "../../services/UserService";

const RegisterScreen = () => {

    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: '',
        pfp: '',
    });
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(!(inputs.name && inputs.email && inputs.password)) return;
        addUser(inputs)
            .then((res) => {
                alert('User successfully added!');
                navigate(AppRoutes.LOGIN);
            })
            .catch((err) => console.error('Couldn\'t add user'));
    }

    return(
        <div className={styles.wrapper}>
            <div className={styles.formWrapper}>
                <div className={styles.bar}></div>
                <form onSubmit={(e) => handleFormSubmit(e)} className={styles.form} >
                    <label htmlFor='name'>Login</label>
                    <input
                        type='text'
                        id='name'
                        placeholder='Login'
                        onChange={(e) => setInputs({...inputs, name: e.target.value})}/>

                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        placeholder='Password'
                        onChange={(e) => setInputs({...inputs, password: e.target.value})}/>

                    <label htmlFor='email'>E-mail address</label>
                    <input
                        type='email'
                        id='email'
                        placeholder='E-mail address'
                        onChange={(e) => setInputs({...inputs, email: e.target.value})}/>

                    <label htmlFor='pfp'>Profile picture URL</label>
                    <input
                        type='text'
                        id='pfp'
                        placeholder='Link to image'
                        onChange={(e) => setInputs({...inputs, pfp: e.target.value})}/>

                    <button>Sign up</button>
                    <div className={styles.subForm}>
                        <span>Already have an account?</span><button onClick={() => navigate(AppRoutes.LOGIN)}>Sign in</button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default RegisterScreen;