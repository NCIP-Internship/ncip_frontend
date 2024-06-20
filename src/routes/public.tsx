import Example from "@/components/data-viz(example)/example";
import Page from "@/pages/sub/accounts/page";
import Settings from "@/pages/sub/settings/page";
import ApplicationProcess from "@/pages/sub/coc/ApplicationProcess";
import Requirements from "@/pages/sub/coc/Requirements";
import UserRole from "@/pages/sub/user-roles/page";
import IpGroups from "@/pages/sub/ip-group/page";

export const publicRoutes = [
  {
    path: "/coc",
    children: [
      {
        path: "application-process",
        element: <ApplicationProcess />,
      },
      { path: "requirements", element: <Requirements /> },
    ],
  },
  {
    path: "test/data-viz",
    element: <Example />,
  },
  {
    path: "test/accounts",
    element: <Page />,
  },
  {
    path: "test/settings",
    element: <Settings />,
  },
  {
    path: "test/user-roles",
    element: <UserRole />,
  },
  {
    path: "test/ip-group",
    element: <IpGroups />,
  },
];
