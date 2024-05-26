import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const login = async (email, password) => {
    try {
        const userData = {
            email,
            password
        }
        const response = await axios.post(`${API_BASE_URL}/signin`, userData);

        return response.data;
    } catch (error) {
        console.error('Error fetching login:', error);
        throw error;
    }
}

export const register = async (email, password) => {
    try {
        const userData = {
            email,
            password
        }
        const response = await axios.post(`${API_BASE_URL}/signup`, userData);

        return response.data;
    } catch (error) {
        console.error('Error fetching register:', error);
        throw error;
    }
}

export const getRooms = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/rooms`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching rooms:', error);
        throw error;
    }
};

export const getRoomById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/getroom?id=${id}`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching get room:', error);
        throw error;
    }
};

export const getCart = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/getcart?id=${userId}`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching add item:', error);
        throw error;
    }
}

export const addCartItem = async (userId, roomId) => {
    try {
        const reqBody = {
            "id_room": roomId
        }
        const response = await axios.post(`${API_BASE_URL}/additem?id=${userId}`, reqBody);
        return response.data;
    } catch (error) {
        console.error('Error fetching add item:', error);
        throw error;
    }
}

export const removeCartItem = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/removeitem?id=${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching remove item:', error);
        throw error;
    }
}

