import React, { useState, createContext } from "react";

export const StoreContext = createContext();

export const StoreProvider = (props) => {
  const [page, setPage] = useState(0);
  const [labelInfo, setlabelInfo] = useState({
    username: {
      firstName: "",
      lastName: "",
    },
    emailphone: {
      email: "",
      phone: "",
    },
    password: "",
    token: "",
    shippingOption: "1",
  });

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };
  const setToken = (event) => {
    console.log(event);
    setlabelInfo({
      ...labelInfo,
      token: event,
    });
  };

  console.log(page, "page");
  const handleChange = (prop) => (event) => {
    setlabelInfo({ ...labelInfo, [prop]: event.target.value });
  };

  const setUsernameInfo = (prop) => (event) => {
    setlabelInfo({
      ...labelInfo,
      username: { ...labelInfo.username, [prop]: event.target.value },
    });
  };
  const setEmailPhoneInfo = (prop) => (event) => {
    setlabelInfo({
      ...labelInfo,
      emailphone: { ...labelInfo.emailphone, [prop]: event.target.value },
    });
  };
  const setPassword = (prop) => (event) => {
    setlabelInfo({
      ...labelInfo,
      password: ([prop] = event.target.value),
    });
  };

  return (
    <StoreContext.Provider
      value={{
        page,

        nextPage,
        prevPage,
        labelInfo,
        handleChange,
        setUsernameInfo,
        setEmailPhoneInfo,
        setPassword,
        setToken,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};
