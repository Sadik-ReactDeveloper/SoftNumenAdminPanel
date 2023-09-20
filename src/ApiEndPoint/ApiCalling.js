// import React, { useEffect } from "react";
import { Create_User, Create_Role } from "./Api";
import axiosConfig from "../axiosConfig";
import dotenv from "dotenv";
dotenv.config();

// const apiKey = process.env.REACT_APP_API_KEY;

// const secretKey = process.env.REACT_APP_SECRET_KEY;
// console.log(`API Key: ${apiKey}`);
// console.log(`Secret Key: ${secretKey}`);

export const CreateRole = async () => {
  let response = await axiosConfig
    .post(`/admin/getProduct`)
    .then((res) => res.data);
  return response;
};
