import React, {useEffect, useState} from "react";
import styles from './AdminPanel.module.scss';
import {addProduct, getAllProducts} from "../ProductsScreen/ProductService";

const AdminPanel = () => {

    const [inputs, setInputs] = useState({
        name: '',
        price: '',
        img: '',
    })
    const [allProducts, setAllProducts] = useState([]);
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

    useEffect(() => {
        try {
            const products = getAllProducts();
            products.then((body) => setAllProducts(body));
        } catch (e) {
            console.log('Error: ' + 'https://media1.tenor.com/m/Jc9jT66AJRwAAAAd/chipi-chipi-chapa-chapa.gif');
        }
    }, []);


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
                            value={inputs.name}
                            onChange={(e) => setInputs({...inputs, name: e.target.value})}/>
                        <label htmlFor='img'>Image</label>
                        <input 
                            type='text' 
                            id='img'
                            placeholder='Image link'
                            value={inputs.img}
                            onChange={(e) => setInputs({...inputs, img: e.target.value})}/>
                        <label htmlFor='price'>Price</label>
                        <input 
                            type='number' 
                            id='price'
                            placeholder='Price'
                            value={inputs.price}
                            onChange={(e) => setInputs({...inputs, price: e.target.value})}/>
                        <button onClick={(e) => handleAddItem(e)}>Add element</button>                            
                    </form>

                    <form className={styles.form}>
                        <ul className={styles.listbox}
                            tabIndex={0}
                            role='listbox'>
                            {
                                allProducts.map((elem, ind) => (
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