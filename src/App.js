import { ThemeProvider } from "next-themes";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Routes";
import "./app.css";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
