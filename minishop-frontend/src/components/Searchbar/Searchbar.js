import React, {useState} from "react";
import styles from './Searchbar.module.scss';
import {useNavigate} from "react-router-dom";

const magni = require('../../assets/l00pcia.png');

const Searchbar = () => {

    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        if(e.key === 'Enter') navigate('/products', {}) // payload
    }

    return(
            <input
                className={styles.input}
                type='text'
                value={input}
                placeholder={'Search for product'}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => handleSubmit(e)}>
            </input>
    )
}

export default Searchbar;