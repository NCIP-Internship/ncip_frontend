import LandingPage from "../pages/Landing";
import { privateRoutes } from "./private";
import { publicRoutes } from "./public";
import { useRoutes } from "react-router-dom";
import { useAuth } from "../hooks";


const AppRoutes = () => {
  const { auth } = useAuth();
  const common = { path: "/", element: <LandingPage /> };
  
  const routes = auth ? privateRoutes : publicRoutes;

  const element = useRoutes([common, ...routes]);

  return <>{element}</>;
};

export default AppRoutes;
