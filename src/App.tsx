import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useMode, ColorModeContext } from "./theme";

const App = () => {
  const [theme, toggleColorMode] = useMode();

  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <button onClick={toggleColorMode}>Toggle mode</button>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
