import Axios from "axios";

const axiosInstance = Axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

export const fetchCSRF = async () => {
  try {
    await axiosInstance.get("/sanctum/csrf-cookie");
  } catch (error) {
    console.error("Failed to FETCH CSRF TOKEN", error);
  }
};

export default axiosInstance;
