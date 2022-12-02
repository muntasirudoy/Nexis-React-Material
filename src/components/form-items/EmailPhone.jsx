import React, { useContext, useState } from "react";
import { TextField, Button, ButtonGroup } from "@mui/material";
import { StoreContext } from "../../store";

const EmailPhone = () => {
  const value = useContext(StoreContext);

  const emailphone = value.labelInfo.emailphone;
  const btnDisbaled =
    emailphone.email.length > 0 && emailphone.phone.length > 0;
  return (
    <>
      <form className="mt-10">
        <TextField
          placeholder="+880 123 4569"
          type="number"
          style={{
            margin: 15,
            width: "93%",
          }}
          fullWidth
          id="standard-basic"
          variant="standard"
          margin="normal"
          required
          onChange={value.setEmailPhoneInfo("phone")}
          value={emailphone.phone}
        />
        <TextField
          label="Write Your Email"
          type="email"
          style={{
            margin: 15,
            width: "93%",
          }}
          fullWidth
          id="standard-basic"
          variant="standard"
          margin="normal"
          required
          onChange={value.setEmailPhoneInfo("email")}
          value={emailphone.email}
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
            onClick={() => value.nextPage()}
            style={{ margin: "25px 15px" }}
          >
            Next Step{" "}
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

export default EmailPhone;
