import React, { useContext, useState } from "react";
import { TextField, Button, ButtonGroup } from "@mui/material";
import { StoreContext } from "../../store";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const LoginForm = () => {
  const value = useContext(StoreContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const btnDisbaled = password.length > 7;
  const navigate = useNavigate();
  console.log(email, password);
  const handleSignin = async () => {
    await axios
      .post("https://test.nexisltd.com/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        value.setToken(response.data.access_token);
        console.log(value);
        if (response.status == 200) {
          toast("Successfully Login");
          setTimeout(() => {
            navigate("/dashboard");
          }, 3000);
        }
      })
      .catch((err) => {
        toast(err.response.data.error);
        navigate("/login");
      });
  };
  return (
    <div>
      {" "}
      <form>
        <TextField
          label="Write Your Email"
          style={{
            margin: 15,
            width: "93%",
          }}
          fullWidth
          id="standard-basic"
          variant="standard"
          margin="normal"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <TextField
          label="Write Your Password"
          id="standard-basic"
          variant="standard"
          style={{ margin: 15, width: "93%" }}
          fullWidth
          margin="normal"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
        />
        <Button
          disabled={!btnDisbaled}
          variant="contained"
          onClick={() => handleSignin()}
          style={{ margin: "25px 15px" }}
        >
          Login{" "}
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
      </form>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default LoginForm;
