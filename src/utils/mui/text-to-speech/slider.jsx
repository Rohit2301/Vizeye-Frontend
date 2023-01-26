import { createTheme, Slider, ThemeProvider, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useState } from "react";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#E37447",
    },
  },
});

const TSslider = ({ label }) => {
  const [thumbValue, setThumbValue] = useState(70);
  const handleChange = (e, newValue) => {
    setThumbValue(newValue);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box width={300}>
        <div className="flex flex-col">
          <div className="flex justify-between text-white">
            <div className="text-white">{label}</div> 
            <div>{thumbValue}</div>
          </div>
          <Slider
            value={thumbValue}
            aria-label={label}
            onChange={handleChange}
          />
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default TSslider;
