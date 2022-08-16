import axios from 'axios';

const authApi = axios.create ({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyAr0IoYlXN9Jdd7RQ38dBbUs20Ol9rAigE'
    }
});


export default authApi;