import React, { useContext } from "react";
import { TextField, Button, ButtonGroup } from "@mui/material";
import { StoreContext } from "../../store";
const UserName = () => {
  const value = useContext(StoreContext);

  const username = value.labelInfo.username;
  const btnDisbaled =
    username.firstName.length > 0 && username.lastName.length > 0;

  return (
    <>
      <form className="mt-10">
        <TextField
          label="Write Your Firstname"
          style={{
            margin: 15,
            width: "93%",
          }}
          fullWidth
          id="standard-basic"
          variant="standard"
          margin="normal"
          required
          onChange={value.setUsernameInfo("firstName")}
          value={username.firstName}
        />
        <TextField
          label="Write Your Lastname"
          id="standard-basic"
          variant="standard"
          style={{ margin: 15, width: "93%" }}
          fullWidth
          margin="normal"
          required
          onChange={value.setUsernameInfo("lastName")}
          value={username.lastName}
        />
        <ButtonGroup
          color="primary"
          aria-label="text primary button group"
          style={{ marginTop: 15 }}
        >
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

export default UserName;
