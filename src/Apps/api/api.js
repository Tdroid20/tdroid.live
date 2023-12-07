import axios from "axios";
import Cookie from "js-cookie";

const apiURL = process.env.REACT_APP_API ?? "/offline"

export const API_SK = axios.create({
  baseURL: apiURL,
  withCredentials: true,
  headers: {
    Authentication: Cookie.get("Authentication")
  }
 });