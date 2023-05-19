import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-media-server-y6e1.onrender.com",
});

export default instance;