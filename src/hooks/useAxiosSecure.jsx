import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://e-commerce-server-rust-five.vercel.app/'
})
const useAxiosSecure = () => {
    return axiosPublic;
};

export default useAxiosSecure;