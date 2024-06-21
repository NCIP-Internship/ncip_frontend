import AuthenticatedLayout from "@/components/Layout/AuthenticatedLayout";
import Form from "@/pages/private/COC/Form";
import Dashboard from "@/pages/private/Dashboard";

const children = [
  {
    path: 'dashboard',
    element: <Dashboard />
  },
  {
    path: 'coc/application_process',
    element: <Form />
  }
]

export const privateRoutes = [
  {
    path: "/u",
    element: <AuthenticatedLayout />,
    children: [...children]
  },
];
