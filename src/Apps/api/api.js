import axios from "axios";
import Cookie from "js-cookie";

const apiURL = process.env.REACT_APP_API ?? "https://6571c96bd61ba6fcc013910c.mockapi.io/api/v1/status"

export const API_SK = axios.create({
  baseURL: apiURL,
  withCredentials: true,
  headers: {
    Authentication: Cookie.get("Authentication")
  }
 });