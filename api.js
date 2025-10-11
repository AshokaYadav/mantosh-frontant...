import axios from "https://cdn.jsdelivr.net/npm/axios@1.7.7/+esm";

const API_URL = "https://mantoshbackend.onrender.com/users";

export function fetchUsersAPI() {
  return axios.get(API_URL);
}

export function addUserAPI(user) {
  return axios.post(API_URL, user);
}
