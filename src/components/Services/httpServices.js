import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.headers.common["Authorization"] = `${token()}`;

axios.interceptors.response.use(null, error => {
    // console.log("httpServ_call--->>", error.response);
    // toast.error(error.response.data);

    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
       
    if (!expectedError) {

        toast.error("An unexpected error occurred.");
    }
    return Promise.reject(error);
});

export function token() {

    if (!localStorage.getItem("token")) {
        // console.log("token_if_return_null", localStorage.getItem("token"));

        return null;
    } else {
        // console.log("token_else", localStorage.getItem("token"));

        return localStorage.getItem("token");
    }
}

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,

};