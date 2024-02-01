import {BackendAPIs} from "../assets/Constants";

export const getAllUsers = async () => {
    const response = await fetch(BackendAPIs.USERS);
    if (response.ok) {
        return await response.json();
    }
    throw new Error('Nie udało się pobrać produktów');
};

export const addUser = async (user) => {
    const response = await fetch(BackendAPIs.USERS, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    });
    if (response.ok) {
        return await response.json();
    }
    //throw new Error('Nie udało się dodać produktu');
};