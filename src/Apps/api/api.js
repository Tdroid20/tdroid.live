import axios from "axios";
import Cookie from "js-cookie";

const apiURL = process.env.REACT_PUBLIC_APP_API ?? "aaaaa"

export const API_SK = axios.create({
  baseURL: apiURL,
  withCredentials: true,
  headers: {
    Authentication: Cookie.get("Authentication")
  }
 });