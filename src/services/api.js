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

export const getAvailableRooms = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/rooms-available`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching available rooms:', error);
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

export const getRoomByType = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/rooms/type?id=${id}`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching get room by type:', error);
        throw error;
    }
};

export const addRoom = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/add-room`, data);

        return response.data;
    } catch (error) {
        console.error('Error fetching add room:', error);
        throw error;
    }
}

export const removeRoom = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/delete-room?id=${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching remove room:', error);
        throw error;
    }
}

export const updateRoom = async (id, data) => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/update-room?id=${id}`, data);
        return response.data;
    } catch (error) {
        console.error('Error fetching update room:', error);
        throw error;
    }
}

export const getTypeRooms = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/rooms/types`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching type rooms:', error);
        throw error;
    }
};

export const addType = async (name) => {
    try {
        const reqBody = { name };
        const response = await axios.post(`${API_BASE_URL}/add-type`, reqBody);

        return response.data;
    } catch (error) {
        console.error('Error fetching add type:', error);
        throw error;
    }
}

export const updateType = async (id, name) => {
    try {
        const reqBody = { name };
        const response = await axios.patch(`${API_BASE_URL}/update-type?id=${id}`, reqBody);

        return response.data;
    } catch (error) {
        console.error('Error fetching update type:', error);
        throw error;
    }
}

export const deleteType = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/delete-type?id=${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching remove type:', error);
        throw error;
    }
}

export const searchRoom = async(check_in, check_out) => {
    try {
        const reqBody = {
            check_in,
            check_out
        }
        const response = await axios.post(`${API_BASE_URL}/rooms/search`, reqBody);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching search room:', error);
        throw error;
    }
}

export const checkOut = async (id) => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/check-out?id=${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching check out room:', error);
        throw error;
    }
}

export const getTypeById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/rooms/type-by?id=${id}`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching get type by id:', error);
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

export const addCartItem = async (userId, roomId, checkIn, checkOut) => {
    try {
        const reqBody = {
            "id_room": roomId,
            "check_in": checkIn,
            "check_out": checkOut
        }
        const response = await axios.post(`${API_BASE_URL}/add-cart-item?id=${userId}`, reqBody);
        return response.data;
    } catch (error) {
        console.error('Error fetching add item:', error);
        throw error;
    }
}

export const removeCartItem = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/remove-cart-item?id=${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching remove item:', error);
        throw error;
    }
}

export const removeCartByUser = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/remove-cart-by-user?id=${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching clear cart:', error);
        throw error;
    }
}

export const getAllBookings = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/allbookings`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching get bookings:', error);
        throw error;
    }
}

export const getBookings = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/bookings?id=${userId}`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching get bookings:', error);
        throw error;
    }
}

export const getBookingById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/getbooking?id=${id}`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching get booking by id:', error);
        throw error;
    }
}

export const getBookingItem = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/get-booking-item?id=${id}`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching get booking item:', error);
        throw error;
    }
}

export const createBooking = async (name, email, total_price, id_user, address, phone, cart) => {
    try {
        const reqBody = {
            name, 
            email, 
            total_price, 
            id_user, 
            address, 
            phone,
            cart
        }
        const response = await axios.post(`${API_BASE_URL}/create-booking`, reqBody);
        return response.data;
    } catch (error) {
        console.error('Error fetching create booking:', error);
        throw error;
    }
}

export const getTotalUsers = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/get-total-users`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching get total users:', error);
        throw error;
    }
}

export const getBookingInfo = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/bookinginfo?id=${id}`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching get booking info:', error);
        throw error;
    }
}

export const updateBooking = async (id, name, email, phone) => {
    try {
        const reqBody = {
            name, 
            email,
            phone
        }
        const response = await axios.patch(`${API_BASE_URL}/updatebooking?id=${id}`, reqBody);
        return response.data;
    } catch (error) {
        console.error('Error fetching update booking:', error);
        throw error;
    }
}

export const removeBooking = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/delete-booking?id=${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching delete booking:', error);
        throw error;
    }
}





