import React from 'react';
import {BrowserRouter as Router, Outlet, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import HomeScreen from './components/HomeScreen/HomeScreen';
import OrderForm from './components/OrderForm';
import LoginScreen from "./components/LoginScreen/LoginScreen";
import AppRoutes from './assets/Constants';
import styles from './App.module.scss';
import ProductsScreen from './components/ProductsScreen/ProductsScreen';

function App() {
    return (
        <div className={styles.wrapper}>
            <Router>
                <Header />
                <Routes>
                    <Route path={AppRoutes.ROOT} exact element={<HomeScreen />} />
                    <Route path={AppRoutes.PRODUCTS} element={<ProductsScreen />} />
                    <Route path={AppRoutes.ORDER} element={<OrderForm />} />
                    <Route path={AppRoutes.LOGIN} element={<LoginScreen />} />
                </Routes>
            </Router>
        </div>


    );
}

export default App;
