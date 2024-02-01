// Plik: src/services/ProductService.js

const baseUrl = 'http://localhost:8080/api/products'; // Adres URL do twojego backendu

export const getAllProducts = async () => {
    const response = await fetch(baseUrl);
    if (response.ok) {
        return await response.json();
    }
    throw new Error('Nie udało się pobrać produktów');
};

export const addProduct = async (product) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(product)
    });
    if (response.ok) {
        return await response.json();
    }
    //throw new Error('Nie udało się dodać produktu');
};

export const deleteProduct = async (productId) => {
    const response = await fetch(`http://localhost:8080/api/products/${productId}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Nie udało się usunąć produktu');
    }
};

