import React from 'react';
import {BrowserRouter as Router, Outlet, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import HomeScreen from './components/HomeScreen/HomeScreen';
import ProductList from './components/ProductList';
import OrderForm from './components/OrderForm';
import LoginScreen from "./components/LoginScreen/LoginScreen";

function App() {
    return (
        <div style={{backgroundColor: '#222222', height: '100vh', boxSizing: 'border-box', margin: 0, padding: 0}}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" exact element={<HomeScreen />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/order" element={<OrderForm />} />
                    <Route path='/login' element={<LoginScreen />} />
                </Routes>
            </Router>
        </div>


    );
}

export default App;
