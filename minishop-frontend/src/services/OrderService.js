import {BackendAPIs} from "../assets/Constants";


export const getAllOrders = async () => {
    const response = await fetch(BackendAPIs.ORDERS);
    return await response.json();
};

export const createOrder = async (order) => {
    const response = await fetch(BackendAPIs.ORDERS, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(order)
    });
    return await response.json();
};

// Podobne metody dla update i delete
