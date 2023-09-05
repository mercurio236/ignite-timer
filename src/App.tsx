import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { defaulTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaulTheme}>
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
    </ThemeProvider>
  );
}
