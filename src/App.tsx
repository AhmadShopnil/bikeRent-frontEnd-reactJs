import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import Providers from "./lib/Providers/Providers";

function App() {
  return (
    <div className="max-w-screen-2xl m-auto">
      <Providers>
        <RouterProvider router={router} />
      </Providers>
    </div>
  );
}

export default App;
