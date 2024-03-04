import axios from 'axios';

const BASE_URL = 'https://pharmacies-en42.onrender.com';
export function getAllMedicines(title: string) {
    return axios.get(`${BASE_URL}/api/${title}`);
}

