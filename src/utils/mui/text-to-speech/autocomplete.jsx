import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E37447",
    },
    secondary: {
      main: "#FF0000",
    },
    text: {
      primary: "#0A0A0A",
      secondary: "#B0B0B0",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "orange",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "red",
          },
        },
      },
    },
  },
});

const AutoSelectFill = ({ data }) => {
  return (
    <div>
      {
        <ThemeProvider theme={theme}>
          <Autocomplete
            options={data}
            getOptionLabel={(option) => option.label}
            freeSolo
            sx={{ width: 300 }}
            id="auto-complete"
            autoComplete
            includeInputInList
            renderOption={(props, option) => (
              <li
                {...props}
                style={{ backgroundColor: "#ffffff", color: "#000000" }}
              >
                {option.yr} - {option.label}
              </li>
            )}
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  label="Language/Locale"
                  variant="standard"
                  color="primary"
                  InputLabelProps={{ style: { color: "#B0B0B0" } }}
                  sx={{
                    input: { color: "#ffffff" },
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "white",
                    },
                    "&:hover .MuiInput-underline:before": {
                      borderBottomColor: "#E37447",
                    },
                  }}
                />
              );
            }}
          />
        </ThemeProvider>
      }
    </div>
  );
};

export default AutoSelectFill;
// "&:hover .css-1qpd1ev-MuiFormControl-root-MuiTextField-root":
//   {
//     borderBottomColor: "orange",
//   },
// "&:hover .MuiInput-root": {
//   borderBottomColor: "secondary",
//   // "&:hover fieldset": {
//   //   borderColor: "yellow",
//   // },
//   // "&.Mui-focused fieldset": {
//   //   borderColor: "green",
//   // },
// },
// "& .css-cpzrrv-MuiInputBase-root-MuiInput-root:before": {},
// "& .css-cpzrrv-MuiInputBase-root-MuiInput-root": {
//   color: "secondary",
// },
// left: "145%",
// transition: "left 1s ease-in",
