import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    secondary: {
      main: "#E37447",
    },
    neutral: {
      main: "#B0B0B0",
      contrastText: "#fff",
    },
  },
});

const InputTypeTtS = () => {
  return (
    <ThemeProvider theme={theme}>
      <FormControl>
        <FormLabel id="InputTypeTtS" color="neutral">
          Input Type
        </FormLabel>
        <RadioGroup row aria-labelledby="InputTypeTtS" name="InputTypeTtS">
          <FormControlLabel
            value="Microphone"
            control={<Radio color="secondary" />}
            label="Microphone"
            sx={{ color: "#ffffff" }}
          />
          <FormControlLabel
            value="File Upload"
            control={<Radio color="secondary" />}
            label="File Upload"
            sx={{ color: "#ffffff" }}
          />
        </RadioGroup>
      </FormControl>
    </ThemeProvider>
  );
};
export default InputTypeTtS;
