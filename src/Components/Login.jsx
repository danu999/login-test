import "../style/login.css";
import {
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import logo from "../image/logo.png";
import bg from "../image/bg.jpg";
import "../style/login.css"

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    pass: "",
    showPass: false,
  });

  const handlePassVisibility = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };

  return (
    <div
      className="bg"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container maxWidth="sm">
        <Grid
          container
          spacing={5}
          direction="column"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Paper
            elelvation={10}
            sx={{ padding: 5 }}
            style={{ height: "650px", width: "75%" }}
            className="papper"
          >
            <img
              src={logo}
              style={{ width: 250, paddingBottom: 45 }}
              alt="Logo"
            />
            <h3>Sistem Akuntansi</h3>
            <h3>Koperasi Primadaya Migas</h3>
            <br></br>
            <Grid container direction="column" spacing={5}>
              {/* USERNAME PASSWORD ADA DISINI */}
              <Grid item>
                <TextField
                  style={{ height: "50px", width: "80%" }}
                  type="text"
                  fullWidth
                  label="Enter your Username"
                  placeholder="Username"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  style={{ height: "50px", width: "80%" }}
                  type={values.showPass ? "text" : "password"}
                  fullWidth
                  label="Password"
                  placeholder="Password"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handlePassVisibility}
                          aria-label="toggle password"
                          edge="end"
                        >
                          {values.showPass ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              {/* BUTTON LOGIN */}
              <Grid item>
                <Button
                  style={{
                    background: "yellow",
                    color: "black",
                    height: "50px",
                    width: "80 %"
                  }}
                  variant="contained"
                  selected
                  className="login"
                >
                  LOGIN
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
