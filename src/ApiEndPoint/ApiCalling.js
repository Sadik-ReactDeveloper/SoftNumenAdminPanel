// import React, { useEffect } from "react";
import {
  Create_Account_xmlView,
  Create_Parts,
  customerRegistration,
  Product_Registration,
  Create_Account_save,
  Create_Account_List,
  Delete_Account_List,
  Create_Account_Update,
  Part_catelougue,
  Spare_Parts,
  Parts_Catalogue,
  Order_Parts,
  Login_User,
  Login_OTP,
  Part_CatalogueView,
} from "./Api";
import axiosConfig from "../axiosConfig";

import dotenv from "dotenv";
dotenv.config();

// const apiKey = process.env.REACT_APP_API_KEY;

// const secretKey = process.env.REACT_APP_SECRET_KEY;
// console.log(`API Key: ${apiKey}`);
// console.log(`Secret Key: ${secretKey}`);

export const UserLogin = async (data) => {
  let response = await axiosConfig
    .post(Login_User, data)
    .then((res) => res.data);
  return response;
};
export const UserOTPVerify = async (data) => {
  let response = await axiosConfig
    .post(Login_OTP, data)
    .then((res) => res.data);
  return response;
};
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
export const CreateAccountSave = async (data) => {
  let response = await axiosConfig
    .post(`${Create_Account_save}`, data)
    .then((res) => res.data);
  return response;
};
export const DeleteAccount = async (id) => {
  console.log(id);
  let response = await axiosConfig
    .get(`${Delete_Account_List}` + id)
    .then((res) => res.data);
  return response;
};
export const CreateAccountList = async (data) => {
  let response = await axiosConfig
    .get(`${Create_Account_List}`, data)
    .then((res) => res.data);
  return response;
};
export const CreateAccountUpdate = async (id, formdata) => {
  console.log(id, formdata);
  let response = await axiosConfig
    .post(`${Create_Account_Update}` + id, formdata)
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

// part
export const PartCatelougue = async (formdata) => {
  console.log(formdata);
  let response = await axiosConfig
    .post(`${Part_catelougue}`, formdata)
    .then((res) => res.data);
  return response;
};
export const PartCatalogueView = async () => {
  let response = await axiosConfig
    .get(`${Part_CatalogueView}`)
    .then((res) => res.data);
  return response;
};

export const SparesPartsList = async () => {
  let response = await axiosConfig
    .get(`${Spare_Parts}`)
    .then((res) => res.data);
  return response;
};

export const PartsCatalogueList = async () => {
  let response = await axiosConfig
    .get(`${Parts_Catalogue}`)
    .then((res) => res.data);
  return response;
};
export const OrderPartsList = async () => {
  let response = await axiosConfig
    .get(`${Order_Parts}`)
    .then((res) => res.data);
  return response;
};
