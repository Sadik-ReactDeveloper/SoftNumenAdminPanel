import React, { useEffect, useState } from "react";
import UserContext from "./Context";

const State = (props) => {
  const [UserData, setUserData] = useState({});
  const [Mode, setMode] = useState("semi-dark");

  return (
    <UserContext.Provider value={{ UserData, setUserData, setMode, Mode }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default State;
