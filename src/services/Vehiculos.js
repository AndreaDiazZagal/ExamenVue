import axios from 'axios';

let API_URL = 'http://localhost:8080/api/vehiculos/page';

const obtenerVehiculosPaginadas = async (page, size, sort) => {
    const params = {
        page,
        size,
        sort
    };
    try {
        const response = await axios.post(API_URL, null, { params });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default {
    obtenerVehiculosPaginadas
};