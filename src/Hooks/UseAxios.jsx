import axios from "axios";

const instance = axios.create({
    baseURL: 'https://task-management-server-iota-six.vercel.app',
    withCredentials: true
  });

const UseAxios = () => {
    return instance
};

export default UseAxios;