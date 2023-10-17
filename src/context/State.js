import React, { useEffect, useState } from "react";
import UserContext from "./Context";
import { CreateAccountView } from "../ApiEndPoint/ApiCalling";
import xmlJs from "xml-js";

const State = (props) => {
  const [crateUserXmlView, setcreateUserXmlView] = useState({});
  const [Mode, setMode] = useState("semi-dark");
  const [PartsCatalougueCart, setPartsCatalougueCart] = useState([]);
  const [UserInformatio, setUserInformatio] = useState({});
  const [PartsCatloguelength, setPartsCatloguelength] = useState(0);

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
        setUserInformatio,
        setPartsCatloguelength,
        PartsCatloguelength,
        UserInformatio,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default State;
