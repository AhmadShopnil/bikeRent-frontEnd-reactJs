import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import Providers from "./lib/Providers/Providers";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store";

function App() {
  return (
    <div className="max-w-screen-2xl m-auto">
      <Providers>

      <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
      </PersistGate>

     
      </Providers>
    </div>
  );
}

export default App;
