import React from "react";
import styles from './ProductsScreen.module.scss';

const prods = [
    {
        name: 'Product',
        img: 'https://media.licdn.com/dms/image/D4D03AQGghECzW6fpdg/profile-displayphoto-shrink_800_800/0/1672226788858?e=2147483647&v=beta&t=fXz9hjHfgMUEM2apurfu9Qo3h9grTm8dj8N61IpliSc',
        price: '2137.69$',
        id: 1,
    },
    {
        name: 'Product',
        img: 'https://media.licdn.com/dms/image/D4D03AQGghECzW6fpdg/profile-displayphoto-shrink_800_800/0/1672226788858?e=2147483647&v=beta&t=fXz9hjHfgMUEM2apurfu9Qo3h9grTm8dj8N61IpliSc',
        price: '2137.69$',
        id: 1,
    },
    {
        name: 'Product',
        img: 'https://media.licdn.com/dms/image/D4D03AQGghECzW6fpdg/profile-displayphoto-shrink_800_800/0/1672226788858?e=2147483647&v=beta&t=fXz9hjHfgMUEM2apurfu9Qo3h9grTm8dj8N61IpliSc',
        price: '2137.69$',
        id: 1,
    },
    {
        name: 'Product',
        img: 'https://media.licdn.com/dms/image/D4D03AQGghECzW6fpdg/profile-displayphoto-shrink_800_800/0/1672226788858?e=2147483647&v=beta&t=fXz9hjHfgMUEM2apurfu9Qo3h9grTm8dj8N61IpliSc',
        price: '2137.69$',
        id: 1,
    },
    {
        name: 'Product',
        img: 'https://media.licdn.com/dms/image/D4D03AQGghECzW6fpdg/profile-displayphoto-shrink_800_800/0/1672226788858?e=2147483647&v=beta&t=fXz9hjHfgMUEM2apurfu9Qo3h9grTm8dj8N61IpliSc',
        price: '2137.69$',
        id: 1,
    },
]

const ProductsScreen = () => {

    return(
        <div className={styles.wrapper}>
            <div className={styles.productsWrapper}>
                <div className={styles.bar}></div>
                <div className={styles.productsList}>
                    {
                        prods.map((elem, ind) => (
                            <div className={styles.product}>
                                <img className={styles.productImg} src={elem.img} />
                                <span>
                                    <h2 className={styles.productName}>{elem.name}</h2>
                                    <span className={styles.productPrice}>{elem.price}</span>
                                </span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductsScreen;