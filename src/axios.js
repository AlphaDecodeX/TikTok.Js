import axios from "axios";

const instance = axios.create({
    baseURL: "https://tiktok-backend-beta.herokuapp.com/",
})

export default instance;