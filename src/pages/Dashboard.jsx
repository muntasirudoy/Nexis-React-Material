import { Container } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import logo from "/logo.png";
import { StoreContext } from "../store";
import axios from "axios";

function createData(date, name, status) {
  return { date, name, status };
}

const rows = [
  createData("11/7/16", "Arlene McCoy", "Present"),
  createData("2/11/12", "Eleanor Pena", "Absent"),
  createData("4/21/12", "Wade Warren", "Present"),
  createData("8/15/17", "Jacob Jones", "Present"),
  createData("6/19/14", "Darlene Robertson", "Absent"),
];

const Dashboard = () => {
  const value = useContext(StoreContext);
  const [info, setInfo] = useState([]);
  const { token } = value.labelInfo;
  useEffect(() => {
    const getData = async () => {
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      if (token) {
        await axios
          .get("https://test.nexisltd.com/test", config)
          .then((res) => {
            let alldata = [];
            {
              Object.values(res.data).forEach((val) => alldata.push(val));
            }

            setInfo(alldata);
          });
      }
    };
    getData();
  }, []);

  console.log(info);
  return (
    <Container>
      <div className="mt-10">
        <img src={logo} alt="" />
      </div>

      <div className="w-full text-center mt-5">
        <h1 className=" text-xl font-semibold bg-blue-800 rounded-md text-white inline-block px-4 py-2">
          Attendance information
        </h1>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell align="right">Employe</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {info.map((e) => (
                <TableRow
                  key={e.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{Object.keys(e.attendance)[2]}</TableCell>
                  <TableCell>{e.name}</TableCell>
                  <TableCell>
                    {e.attendance[Object.keys(e.attendance)[2]].status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Container>
  );
};

export default Dashboard;
