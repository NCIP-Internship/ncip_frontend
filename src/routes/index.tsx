import { privateRoutes } from "./private";
import { publicRoutes } from "./public";
import { useRoutes } from "react-router-dom";
import { useAuth } from "../hooks";
import GuessLayout from "@/components/Layout/GuessLayout";

const AppRoutes = () => {
  const { auth } = useAuth();
  const common = { path: "/", element: <GuessLayout /> };

  const routes = auth ? privateRoutes : publicRoutes;

  const element = useRoutes([{ ...common, children: [...routes] }]);

  return <>{element}</>;
};

export default AppRoutes;
