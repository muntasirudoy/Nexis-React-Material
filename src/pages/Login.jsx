import { Container } from "@mui/system";
import React, { useContext } from "react";
import { StoreContext } from "../store";
import EmailPhone from "../components/form-items/EmailPhone";
import LoginForm from "../components/form-items/LoginForm";
import Password from "../components/form-items/Password";
import UserName from "../components/form-items/UserName";
import { Link } from "react-router-dom";

import formImg from "/img1.png";
import logo from "/logo.png";
import { Grid } from "@mui/material";
const Login = () => {
  const value = useContext(StoreContext);
  return (
    <>
      <Container>
        <div className="h-screen">
          <img className="py-5" src={logo} alt="" />
          <div className=" flex justify-between w-full">
            <Grid container spacing={2}>
              <Grid item xs={0} sm={0} md={6} lg={6} xl={6}>
                <div className="mt-10">
                  <img className="formimg" src={formImg} alt="" />
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <div className="  w-full border border-[#f0f0f0] h-[70vh] bg-white rounded-lg shadow-lg shadow-gray-300/50 px-12 py-16">
                  <h1 className=" text-2xl font-bold text-gray-600 text-center">
                    Login Form
                  </h1>
                  <LoginForm />
                  <p className=" text-center text-sm mt-10">
                    Don't have an account ?
                    <Link
                      className=" text-blue-700 font-semibold underline"
                      to="/signup"
                    >
                      {" "}
                      SIGNUP
                    </Link>
                  </p>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
