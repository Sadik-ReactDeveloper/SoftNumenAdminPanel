import React, { useEffect } from "react";
import { Create_User, Create_Role } from "./Api";
import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.REACT_APP_API_KEY;

const secretKey = process.env.REACT_APP_SECRET_KEY;
console.log(`API Key: ${apiKey}`);
console.log(`Secret Key: ${secretKey}`);

function ApiCalling() {
  useEffect(() => {
    console.log(Create_User);
    console.log(Create_Role);
  }, []);
  return <div></div>;
}

export default ApiCalling;
