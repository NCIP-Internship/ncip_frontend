import { privateRoutes } from "./private";
import { publicRoutes } from "./public";
import { useRoutes } from "react-router-dom";
import { useAuth } from "../hooks";

const AppRoutes = () => {
  const { auth } = useAuth();

  const routes = auth ? [...publicRoutes, ...privateRoutes] : [...publicRoutes]

  const element = useRoutes(routes);

  return <>{element}</>;
};

export default AppRoutes;
