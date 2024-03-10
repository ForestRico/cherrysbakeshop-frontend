// Importing this into the index.js the script will automatically be called and the base URL of teh axios will bet set on localhost:5000 when we are not in production mode.
import axios from 'axios';

axios.defaults.baseURL = 
    process.env.NODE_ENV !== 'production' ? 'http://localhost:5000' : '/' ;
