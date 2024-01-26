import React from 'react';
import styles from './Header.module.scss';
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <Link to={'/'} style={{textDecoration: "none"}}>
            <header className={styles.wrapper}>
                <h1 className={styles.title}>minishop</h1>
                <button className={styles.btn} onClick={() => navigate('/login')}>Sign in</button>
            </header>
        </Link>

        // <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#f3f3f3' }}>
        //     <h1 style={{ margin: '0' }}>MiniShop</h1> {/* Logo aplikacji */}
        //     <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        //         Zaloguj się
        //     </button> {/* Przycisk logowania */}
        // </div>
    );
}

export default Header;
