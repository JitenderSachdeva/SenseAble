// import axios from 'axios';
// import { GET_ERRORS, SET_CURRENT_USER } from './types';
// import setAuthToken from '../setAuthToken';
// //import jwt_decode from 'jwt-decode';


// export const loginUser = (user) => dispatch => {
//     axios.post('http://localhost:8182/drum/login', user)
//         .then(res => {
//             console.log(res);
//            const { token } = res.data;
//             localStorage.setItem( token);
//             setAuthToken(token);
//             // const decoded = token;
//             //  dispatch(setCurrentUser(decoded));
//         })
//         .catch(err => {
//             dispatch({
//                 type: GET_ERRORS,
//                 payload: err.response.data
//             });
//         });
// }

// export const setCurrentUser = decoded => {
//     return {
//         type: SET_CURRENT_USER,
//         payload: decoded
//     }
// }

// export const logoutUser = (history) => dispatch => {
//     localStorage.removeItem('jwtToken');
//     setAuthToken(false);
//     dispatch(setCurrentUser({}));
//     history.push('/login');
// }