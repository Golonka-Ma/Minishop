import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import HomeScreen from './components/HomeScreen/HomeScreen';
import LoginScreen from "./components/LoginScreen/LoginScreen";
import styles from './App.module.scss';
import ProductsScreen from './components/ProductsScreen/ProductsScreen';
import AdminPanel from './components/AdminPanel/AdminPanel';
import Footer from './components/Footer/Footer';
import RegisterScreen from "./components/RegisterScreen/RegisterScreen";
import {AppRoutes} from "./assets/Constants";
import ProductViewScreen from "./components/ProductViewScreen/ProductViewScreen";

const App = () => {

    return (
        <>
        <div className={styles.wrapper}>
            <Router>
                <Header />
                <Routes>
                    <Route path={AppRoutes.ROOT} exact  element={<HomeScreen />} />
                    <Route path={AppRoutes.PRODUCTS}    element={<ProductsScreen />} />
                    <Route path={AppRoutes.LOGIN}       element={<LoginScreen />} />
                    <Route path={AppRoutes.ADMIN}       element={<AdminPanel />}/>
                    <Route path={AppRoutes.REGISTER}    element={<RegisterScreen />} />
                    <Route path={AppRoutes.PRODUCT}     element={<ProductViewScreen />} />
                    <Route path={'*'}                   element={<HomeScreen />} />
                </Routes>
            </Router>
        </div>
        <Footer />
        </>
        


    );
}

export default App;
