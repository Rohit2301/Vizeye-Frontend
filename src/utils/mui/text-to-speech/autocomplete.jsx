import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#E37447",
    },
    text: {
      primary: "#ffffff",
      secondary: "#B0B0B0",
    },
  },
});

const AutoSelectFill = ({ data, label }) => {
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
                  label={label}
                  variant="standard"
                  color="primary"
                  InputLabelProps={{ style: { color: "  " } }}
                  sx={{
                    input: { color: "#ffffff" },
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
