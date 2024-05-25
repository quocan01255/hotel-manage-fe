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