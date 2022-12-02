import React, { useContext, useState } from "react";
import { TextField, Button, ButtonGroup } from "@mui/material";
import { StoreContext } from "../../store";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Password = () => {
  const value = useContext(StoreContext);
  const password = value.labelInfo.password;
  const btnDisbaled = password.length > 8;
  const navigate = useNavigate();
  const handleSignup = async () => {
    const { username, emailphone, password } = value.labelInfo;
    try {
      await axios.post("https://test.nexisltd.com/signup", {
        first_name: username.firstName,
        last_Name: username.lastName,
        phone_number: emailphone.phone,
        email: emailphone.email,
        password,
      });
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="mt-10">
        <TextField
          placeholder="Write your password"
          type="password"
          style={{
            margin: 15,
            width: "93%",
          }}
          fullWidth
          id="standard-basic"
          variant="standard"
          margin="normal"
          required
          onChange={value.setPassword("password")}
          value={value.password}
        />

        <ButtonGroup
          color="primary"
          aria-label="text primary button group"
          style={{ marginTop: 15, marginRight: 10 }}
        >
          <Button
            onClick={() => value.prevPage()}
            variant="outlined"
            style={{ margin: 25, borderRightColor: "blue" }}
          >
            Previous
          </Button>
          <Button
            disabled={!btnDisbaled}
            variant="contained"
            onClick={handleSignup}
            style={{ margin: "25px 15px" }}
          >
            SignUp{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </ButtonGroup>
      </form>
    </>
  );
};

export default Password;
