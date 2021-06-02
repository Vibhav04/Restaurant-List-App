import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer kdmOFsPVNXwQQBgO0E-9AT3YZtkdjrFxtYAhz25gEYY4PWRjwnopKaL5-j2lMi_NK-3ti_h4JaOw9awUgYffFUbRKEdbVQW7P_HVGdJdQSoboPOqP04UNfEj_eKWX3Yx'
    }
});
