import { createTheme, TextField, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#E37447",
    },
  },
});

const TextToSpeechTextField = () => {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        variant="standard"
        id="text-to-speak"
        label="Text to Speak :"
        color="primary"
        fullWidth
        multiline
      />
      ;
    </ThemeProvider>
  );
};

export default TextToSpeechTextField;
