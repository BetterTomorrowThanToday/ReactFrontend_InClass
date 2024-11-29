import axios from 'axios';

const API_URL = process.env.REACT_APP_ALB_URL;

export const fetchUsers = async () => {
    try {
        const response = await axios.get(API_ㅋURL);
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};