import React, { useState } from "react";
import styles from './AdminPanel.module.scss';
import {addProduct} from "../ProductsScreen/ProductService";

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
        id: 2,
    },
    {
        name: 'Product',
        img: 'https://media.licdn.com/dms/image/D4D03AQGghECzW6fpdg/profile-displayphoto-shrink_800_800/0/1672226788858?e=2147483647&v=beta&t=fXz9hjHfgMUEM2apurfu9Qo3h9grTm8dj8N61IpliSc',
        price: '2137.69$',
        id: 3,
    },
    {
        name: 'Product',
        img: 'https://media.licdn.com/dms/image/D4D03AQGghECzW6fpdg/profile-displayphoto-shrink_800_800/0/1672226788858?e=2147483647&v=beta&t=fXz9hjHfgMUEM2apurfu9Qo3h9grTm8dj8N61IpliSc',
        price: '2137.69$',
        id: 4,
    },
    {
        name: 'Product',
        img: 'https://media.licdn.com/dms/image/D4D03AQGghECzW6fpdg/profile-displayphoto-shrink_800_800/0/1672226788858?e=2147483647&v=beta&t=fXz9hjHfgMUEM2apurfu9Qo3h9grTm8dj8N61IpliSc',
        price: '2137.69$',
        id: 5,
    },
    {
        name: 'Product',
        img: 'https://media.licdn.com/dms/image/D4D03AQGghECzW6fpdg/profile-displayphoto-shrink_800_800/0/1672226788858?e=2147483647&v=beta&t=fXz9hjHfgMUEM2apurfu9Qo3h9grTm8dj8N61IpliSc',
        price: '2137.69$',
        id: 6,
    },
    {
        name: 'Product',
        img: 'https://media.licdn.com/dms/image/D4D03AQGghECzW6fpdg/profile-displayphoto-shrink_800_800/0/1672226788858?e=2147483647&v=beta&t=fXz9hjHfgMUEM2apurfu9Qo3h9grTm8dj8N61IpliSc',
        price: '2137.69$',
        id: 7,
    },
    {
        name: 'Product',
        img: 'https://media.licdn.com/dms/image/D4D03AQGghECzW6fpdg/profile-displayphoto-shrink_800_800/0/1672226788858?e=2147483647&v=beta&t=fXz9hjHfgMUEM2apurfu9Qo3h9grTm8dj8N61IpliSc',
        price: '2137.69$',
        id: 8,
    },
    {
        name: 'Product',
        img: 'https://media.licdn.com/dms/image/D4D03AQGghECzW6fpdg/profile-displayphoto-shrink_800_800/0/1672226788858?e=2147483647&v=beta&t=fXz9hjHfgMUEM2apurfu9Qo3h9grTm8dj8N61IpliSc',
        price: '2137.69$',
        id: 9,
    },
    {
        name: 'Product',
        img: 'https://media.licdn.com/dms/image/D4D03AQGghECzW6fpdg/profile-displayphoto-shrink_800_800/0/1672226788858?e=2147483647&v=beta&t=fXz9hjHfgMUEM2apurfu9Qo3h9grTm8dj8N61IpliSc',
        price: '2137.69$',
        id: 10,
    },
    {
        name: 'Product',
        img: 'https://media.licdn.com/dms/image/D4D03AQGghECzW6fpdg/profile-displayphoto-shrink_800_800/0/1672226788858?e=2147483647&v=beta&t=fXz9hjHfgMUEM2apurfu9Qo3h9grTm8dj8N61IpliSc',
        price: '2137.69$',
        id: 11,
    },
    {
        name: 'Product',
        img: 'https://media.licdn.com/dms/image/D4D03AQGghECzW6fpdg/profile-displayphoto-shrink_800_800/0/1672226788858?e=2147483647&v=beta&t=fXz9hjHfgMUEM2apurfu9Qo3h9grTm8dj8N61IpliSc',
        price: '2137.69$',
        id: 12,
    },
    {
        name: 'Product',
        img: 'https://media.licdn.com/dms/image/D4D03AQGghECzW6fpdg/profile-displayphoto-shrink_800_800/0/1672226788858?e=2147483647&v=beta&t=fXz9hjHfgMUEM2apurfu9Qo3h9grTm8dj8N61IpliSc',
        price: '2137.69$',
        id: 13,
    },
]

const AdminPanel = () => {

    const [inputs, setInputs] = useState({
        name: '',
        img: '',
        price: '',
    })
    const [indexToDrop, setIndexToDrop] = useState(-1);

    const handleAddItem = async (e) => {
        e.preventDefault();
        const newProduct = {
            name: inputs.name,
            img: inputs.img,
            price: inputs.price
        };
        try {
            const addedProduct = await addProduct(inputs);
            alert('Produkto zostal dodany');
            setInputs({
                name: '',
                price: '',
                img: '',
            });
            // Aktualizacja stanu i inne działania
        } catch (error) {
            console.log('Error, ale chuj');
        }

    };


    const handleDropItem = (e) => {
        e.preventDefault();
        
    }

    return(
        <div className={styles.wrapper}>
            <div className={styles.adminWrapper}>
                <div className={styles.bar}></div>
                <div className={styles.formsContainer}>
                    <form className={styles.form}>
                        <label htmlFor='name'>Name</label>
                        <input 
                            type='text' 
                            id='name'
                            placeholder='Name'
                            onChange={(e) => setInputs({...inputs, name: e.target.value})}/>
                        <label htmlFor='img'>Image</label>
                        <input 
                            type='text' 
                            id='img'
                            placeholder='Image link'
                            onChange={(e) => setInputs({...inputs, img: e.target.value})}/>
                        <label htmlFor='price'>Price</label>
                        <input 
                            type='number' 
                            id='price'
                            placeholder='Price'
                            onChange={(e) => setInputs({...inputs, price: e.target.value})}/>
                        <button onClick={(e) => handleAddItem(e)}>Add element</button>                            
                    </form>

                    <form className={styles.form}>
                        <ul className={styles.listbox}
                            tabIndex={0}
                            role='listbox'>
                            {
                                prods.map((elem, ind) => (
                                    <li key={ind} onClick={() => setIndexToDrop(ind)} style={indexToDrop === ind ? {backgroundColor: '#686dd4'} : {}}>
                                        <span>ID: {elem.id} -- </span>  
                                        <span> {elem.name}, {elem.price}</span>
                                    </li>
                                ))
                            }
                        </ul>
                        <button onClick={(e) => handleDropItem(e)}>Drop element</button>                            
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminPanel;