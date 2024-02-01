import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import {Link, useNavigate} from "react-router-dom";
import AppRoutes, {Colours} from '../../assets/Constants';

const Header = () => {

    const [loggedIn, setLoggedIn] = useState(false);


    useEffect(() => {
        const obj = JSON.parse(localStorage.getItem('logged_user'));
        if(obj) setLoggedIn(true);
    }, []);

    const logoutUser = () => {
        localStorage.removeItem('logged_user');
        setLoggedIn(false);
    }

    return (
        <>
            <header className={styles.wrapper}>
                <Link to={AppRoutes.ROOT} style={{textDecoration: "none"}}>
                    <h1 className={styles.title}>minishop</h1>
                </Link>
                <Link to={AppRoutes.LOGIN}><button className={styles.btn} onClick={() => logoutUser()}>{loggedIn ? 'sign out' : 'sign in'}</button></Link>
            </header>
            <div className={styles.menu}>
                <Link to={AppRoutes.ROOT} style={{textDecoration: "none"}}>
                    <div>
                        Home
                    </div>
                </Link>
                <Link to={AppRoutes.PRODUCTS} style={{textDecoration: "none"}}>
                    <div>
                        Products
                    </div>
                </Link>
                {loggedIn && <Link to={AppRoutes.ADMIN} style={{textDecoration: "none"}}>
                    <div>
                        Admin panel
                    </div>
                </Link>}
            </div>
        </>
            

        // <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#f3f3f3' }}>
        //     <h1 style={{ margin: '0' }}>MiniShop</h1> {/* Logo aplikacji */}
        //     <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        //         Zaloguj się
        //     </button> {/* Przycisk logowania */}
        // </div>
    );
}

export default Header;
