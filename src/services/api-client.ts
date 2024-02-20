import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '02763a40dc6f4a599d1ec4c5edadebdb'
    }
})