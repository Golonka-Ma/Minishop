import React, {useEffect, useState} from "react";
import styles from './ProductViewScreen.module.scss';
import {useParams} from "react-router-dom";
import {getProductById} from "../../services/ProductService";

const ProductViewScreen = () => {

    const params = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        getProductById(params.id)
            .then((resp) => {
                const obj = {
                    name: resp.name,
                    price: resp.price,
                    img: resp.img,
                    id: resp.id,
                };
                setProduct(obj);
            })
            .catch((err) => console.error(err));
    }, []);

    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.bar} />
                <div className={styles.content}>
                    <div className={styles.row}>
                        <img src={product.img} />
                        <div>
                            <h2>{product.name}</h2>
                            <div className={styles.descriptionContainer}>
                                <h2>Description</h2>
                                <span className={styles.description}>PLACEHOLDER PLACEHOLDER PLACEHOLDER</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.subRow}>
                        <h3>Price:</h3><span className={styles.subDescription}>{product.price}</span>
                    </div>
                    <div className={styles.subRow}>
                        <h3>ID:</h3><span className={styles.subDescription}>{product.id}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductViewScreen;