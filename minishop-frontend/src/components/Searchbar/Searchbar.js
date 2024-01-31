import React, {useState} from "react";
import styles from './Searchbar.module.scss';
import {useLocation, useNavigate} from "react-router-dom";

const magni = require('../../assets/l00pcia.png');

const Searchbar = ({altColor}) => {

    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        if(e.key === 'Enter') {
            navigate('/products', {state: {searchInput: input}}) // payload
            window.location.reload();
        }
    }

    return(
            <input
                className={styles.input}
                style={altColor ? {backgroundColor: '#282c34', color: '#ffffff'} : {}}
                type='text'
                value={input}
                placeholder={'Search for product'}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => handleSubmit(e)}>
            </input>
    )
}

export default Searchbar;