import { createBrowserRouter } from "react-router-dom";
import App from "./App";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        //TODO criar rotas
        // ex:
        // {
        //     path: "unauthorized",
        //     element: <UnauthorizedPage />,
        // }
    ],
  },
  {
    path: "unauthorized",
    // element: <UnauthorizedPage />,
  },
  {
    path: "no-chatbot",
    // element: <NoChatbotPage />,
  },
]);

export default router;
