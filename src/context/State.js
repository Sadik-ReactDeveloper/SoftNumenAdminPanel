import React, { useEffect, useState } from "react";
import UserContext from "./Context";
import { CreateAccountView } from "../ApiEndPoint/ApiCalling";
import xmlJs from "xml-js";

const State = (props) => {
  const [crateUserXmlView, setcreateUserXmlView] = useState({});
  const [Mode, setMode] = useState("semi-dark");
  const [PartsCatalougueCart, setPartsCatalougueCart] = useState([]);

  useEffect(() => {
    // CreateAccountView()
    //   .then((res) => {
    //     const jsonData = xmlJs.xml2json(res.data, { compact: true, spaces: 2 });
    //     console.log(res);
    //     setcreateUserXmlView(jsonData);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);
  return (
    <UserContext.Provider
      value={{
        crateUserXmlView,
        setMode,
        Mode,
        setPartsCatalougueCart,
        PartsCatalougueCart,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default State;
