import AuthenticatedLayout from "@/components/Layout/AuthenticatedLayout";
import Dashboard from "@/pages/private/Dashboard";

const children = [
  {
    path: 'dashboard',
    element: <Dashboard />
  }
]

export const privateRoutes = [
  {
    path: "/u",
    element: <AuthenticatedLayout />,
    children: [...children]
  },
];
