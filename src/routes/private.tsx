import AuthenticatedLayout from "@/components/Layout/AuthenticatedLayout";
import Form from "@/pages/private/COC/Form";
import Dashboard from "@/pages/private/Dashboard";
import IPGroup from "@/pages/sub/ip-group/page";
import ApplicationStatus from "@/pages/sub/coc-account-status/page";
import Accounts from "@/pages/sub/accounts/page";
import UserRoles from "@/pages/sub/user-roles/page";
import Settings from "@/pages/sub/settings/page";

const children = [
  {
    path: 'dashboard',
    element: <Dashboard />
  },
  {
    path: 'coc/application_process',
    element: <Form />
  },
  {
    path: 'coc/ip_group',
    element: <IPGroup />
  },
  {
    path: 'coc/application_status',
    element: <ApplicationStatus />
  },
  {
    path: 'user_roles',
    element: <UserRoles />
  },
  {
    path: 'accounts',
    element: <Accounts />
  },
  {
    path: 'settings',
    element: <Settings />
  }
]

export const privateRoutes = [
  {
    path: "/u",
    element: <AuthenticatedLayout />,
    children: [...children]
  },
];
