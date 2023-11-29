import axios from "axios";


export const API = axios.create({
  baseURL: 'https://restcountries.com/v3.1/all'
})