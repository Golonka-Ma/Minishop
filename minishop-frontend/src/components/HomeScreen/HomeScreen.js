import React, {useEffect, useState} from "react";
import styles from './HomeScreen.module.scss';
import {getAllProducts} from "../../services/ProductService";
import _ from 'lodash';
import Searchbar from "../Searchbar/Searchbar";
import {getAllUsers} from "../../services/UserService";
import {Link} from "react-router-dom";
import {AppRoutes} from "../../assets/Constants";

const HomeScreen = () => {

    const [allProducts, setAllProducts] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const recentlyAddedLimit = 3;

    useEffect(() => {
        try {
            const prods = getAllProducts();
            prods.then((body) => setAllProducts(body));
        } catch(e) {
            console.log(e);
        }
    }, []);

    useEffect(() => {
        try {
            const users = getAllUsers();
            users.then((body) => setAllUsers(body));
        } catch(e) {
            console.log(e);
        }
    }, []);

    return(
        <div className={styles.wrapper}>
            <div className={styles.container + " " + styles.recentlyAdded}>
                <div className={styles.bar}></div>
                <div className={styles.containerContent}>
                    <h2 className={styles.containerHeading}>recently added</h2>
                    <ul className={styles.recentlyAddedList}>
                        {
                            allProducts.filter((e, i) => i >= allProducts.length - recentlyAddedLimit).map((elem, ind) => (
                                <Link to={AppRoutes.PRODUCTS + '/' + elem.id} style={{textDecoration: 'none', color: 'black'}}>
                                    <li key={ind} className={styles.recentlyAddedProduct}>
                                        <img src={elem.img}/>
                                        <span>
                                        <h2>{elem.name}</h2>
                                        <span>{elem.price}</span>
                                    </span>
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>

                </div>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <div className={styles.container + " " + styles.exploreContainer}>
                    <div className={styles.bar}></div>
                    <div className={styles.containerContent}>
                        <h2 className={styles.containerHeading}>explore</h2>
                        <ul className={styles.exploreList}>
                            {
                                _.shuffle(allProducts).filter((e, i) => i < 5).map((elem, ind) => (
                                    <Link to={AppRoutes.PRODUCTS + '/' + elem.id} style={{textDecoration: 'none', color: 'black'}}>
                                        <li key={ind} className={styles.exploreProduct}>
                                            <img src={elem.img}/>
                                            <span>
                                            <h2>{elem.name}</h2>
                                            <span>{elem.price}</span>
                                        </span>
                                        </li>
                                    </Link>
                                ))
                            }
                        </ul>

                    </div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.bar}></div>
                <div className={styles.containerContent}>
                    <h2 className={styles.containerHeading}>recently active</h2>
                    <ul className={styles.recentlyAddedList}>
                        {
                            _.shuffle(allUsers).filter((e, i) => i < 3).map((elem, ind) => (
                                <li key={ind} className={styles.recentlyAddedProduct}>
                                    <img src={elem.pfp}/>
                                    <span>
                                        <h2>{elem.name}</h2>
                                    </span>
                                </li>
                            ))
                        }
                    </ul>

                </div>
            </div>

        </div>
    )
}

export default HomeScreen;