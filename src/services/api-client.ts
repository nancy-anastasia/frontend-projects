import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '46d10068d12a4cceaa05f9cab8639460'
    }
})