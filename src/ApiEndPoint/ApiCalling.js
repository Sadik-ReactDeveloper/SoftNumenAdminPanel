// import React, { useEffect } from "react";
import {
  Create_User,
  Create_Role,
  Create_Account,
  Create_Account_xmlView,
  Create_Parts,
  customerRegistration,
  Product_Registration,
} from "./Api";
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
export const CreateAccountView = async () => {
  let response = await axiosConfig
    .get(`${Create_Account_xmlView}`)
    .then((res) => res.data);
  return response;
};

export const CreateParts = async () => {
  let response = await axiosConfig
    .get(`${Create_Parts}`)
    .then((res) => res.data);
  return response;
};
export const Customer_Registration = async () => {
  let response = await axiosConfig
    .get(`${customerRegistration}`)
    .then((res) => res.data);
  return response;
};
export const ProductRegistration = async () => {
  let response = await axiosConfig
    .get(`${Product_Registration}`)
    .then((res) => res.data);
  return response;
};
