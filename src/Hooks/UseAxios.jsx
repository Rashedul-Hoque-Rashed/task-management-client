import axios from "axios";

const instance = axios.create({
    baseURL: 'https://task-manage-ten.vercel.app'
  });

const UseAxios = () => {
    return instance
};

export default UseAxios;