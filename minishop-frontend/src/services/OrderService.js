const baseUrl = 'http://localhost:8080/api/orders';

export const getAllOrders = async () => {
    const response = await fetch(baseUrl);
    return await response.json();
};

export const createOrder = async (order) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(order)
    });
    return await response.json();
};

// Podobne metody dla update i delete
