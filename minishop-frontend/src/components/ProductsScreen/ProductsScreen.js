import React, {useEffect, useState} from "react";
import styles from './ProductsScreen.module.scss';
import {getAllProducts} from "../../services/ProductService";
import {Link, useLocation} from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import {AppRoutes} from "../../assets/Constants";

const ProductsScreen = () => {

    const {state} = useLocation();
    const [allProducts, setAllProducts] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        try {
            console.log(state);
            const products = getAllProducts();
            products.then((body) => setAllProducts(body));
            if(state.searchInput) {
                console.log(state);
                setSearchInput(state.searchInput);
            }

        } catch (e) {
            console.log('ProductsScreen: Problem z fetchowaniem wszystkich produktów');
        }

    },[]);

    return(
        <div className={styles.wrapper}>
            <div className={styles.productsWrapper}>
                <div className={styles.bar}></div>
                <div className={styles.productsList}>
                    {
                        (searchInput ?
                            allProducts.filter(elem => elem.name.toLowerCase().includes(searchInput.toLowerCase())) :
                            allProducts)
                            .map((elem, ind) => (
                                <Link to={AppRoutes.PRODUCTS + '/' + elem.id} style={{textDecoration: 'none', color: 'black'}}>
                                    <div className={styles.product}>
                                        <img className={styles.productImg} src={elem.img} />
                                        <span>
                                            <h2 className={styles.productName}>{elem.name}</h2>
                                            <span className={styles.productPrice}>{elem.price}</span>
                                        </span>
                                    </div>
                                </Link>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductsScreen;