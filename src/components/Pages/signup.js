import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { signUp } from "../../redux/userSlice";
import { onNext } from "../../redux/onNext";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Vizeye
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f3a57d",
    },
  },
  text: {
    primary: "#ffffff",
  },
});

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { error, loading, isAuthenticated, user } = useSelector(
    (state) => state.user
  );
  const { url } = useSelector((state) => state.onNext);
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");
    dispatch(signUp({ auth, email, password, name }));
    const jsonData = {
      name: name,
      email: email,
    };
    // try {
    //   const res = await axios.post("http://localhost:4000/user", jsonData, {
    //     headers: {
    //       "Content-type": "application/x-www-form-urlencoded",
    //     },
    //   });
    //   console.log(res);
    // } catch (e) {
    //   console.log("error in axios request of signup");
    // }
    // dispatch(onNext("/"));
    navigate(location.state?.from || "/", { replace: true });
  };
  // useEffect(() => {
  //   navigate("", { replace: true });
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "92.4vh" }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7}>
          <div
            className="signup"
            style={{
              height: "92.4vh",
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          style={{
            paddingRight: "3rem",
            paddingLeft: "3rem",
            background:
              "linear-gradient(73.36deg,#021a40 12.09%,#08234c 27.2%,#1d3258 50.33%,#17315d 70.15%,#3a4b71 91.37%)",
          }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#f3a57d" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h5" variant="h5">
              Sign in
            </Typography>
            {error ? (
              <Typography
                component="h5"
                variant="h6"
                style={{ color: "#f44336" }}
              >
                {error}
              </Typography>
            ) : (
              ""
            )}
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signIn" variant="body2">
                    {"Already have a account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default SignUp;
