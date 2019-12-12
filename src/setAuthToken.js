import axios from 'axios';

const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['abc'] = token;
    }
    else {
        delete axios.defaults.headers.common['abc'];
    }
}

export default setAuthToken;