import axios from "axios";

const baseURL = "http://localhost:5000/";

export const validateUser = async (token) => {
  try {
    const response = await axios.get(`${baseURL}api/auth/login`, {
      headers: { Authorization: "Bearer " + token },
    });

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
