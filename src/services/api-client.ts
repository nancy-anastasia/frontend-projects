import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6552c801970c4a1aa706ce9069c69da5'
    }
})