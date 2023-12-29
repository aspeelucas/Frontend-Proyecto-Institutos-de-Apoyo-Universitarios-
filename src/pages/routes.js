import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import NotFound from "./layouts/NotFound";
import Dashboard from "./dashboard/Dashboard";
import Todo from "./Todo/Todo";
import FetchList from "./FetchList/FetchList";
import InstitutesList from "./InstutesList/InstitutesList";
const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { path: "", element: <Dashboard /> },
        { path: "todo", element: <Todo /> },
        { path: "fetch-list", element: <FetchList /> },
        { path: "institutes-list", element: <InstitutesList />}
      ],
    },

    { path: "/404", element: <NotFound /> },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
};
export default Routes;
