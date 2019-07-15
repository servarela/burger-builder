import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-js-burger-builder-app.firebaseio.com/'
});

export default instance;