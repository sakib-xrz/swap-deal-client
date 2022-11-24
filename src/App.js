import { ThemeProvider } from "next-themes";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Routes";
import "./app.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ThemeProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
