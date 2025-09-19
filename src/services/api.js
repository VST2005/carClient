import axios from 'axios';
const API = axios.create({
    baseURL :'https://carserver-r316.onrender.com/api',
    withCredentials:true,  //agar cookies ka use ho rha hai
 });

export default API;