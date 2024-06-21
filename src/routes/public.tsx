import Example from "@/components/data-viz(example)/example";
import DemoApi from "@/pages/public/demo_api";
import DemoForm from "@/pages/public/demo_form";
import ApplicationProcess from "@/pages/public/sub/coc/ApplicationProcess";
import Guidelines from "@/pages/public/sub/coc/Guidelines";
import Requirements from "@/pages/public/sub/coc/Requirements";
import Ipmrguide from "@/pages/public/sub/ipmr/Ipmrguidelines";
import Ipmrprocess from "@/pages/public/sub/ipmr/Ipmrprocess";
import Ipmreq from "@/pages/public/sub/ipmr/ipmrreq";
import Ipoguidelines from "@/pages/public/sub/ipoips/Ipoguidelines";
import Ipoprocess from "@/pages/public/sub/ipoips/Ipoprocess";
import Iporequirements from "@/pages/public/sub/ipoips/Iporequirements";
import Homepage from "@/pages/public/Homepage";
import GuessLayout from "@/components/Layout/GuessLayout";
import Page from "@/pages/sub/accounts/page";
import Settings from "@/pages/sub/settings/page";
import UserRole from "@/pages/sub/user-roles/page";
import IpGroups from "@/pages/sub/ip-group/page";
import AccountStatus from "@/pages/sub/coc-account-status/page";

const children = [
  {
    index: true,
    element: <Homepage />
  },
  {
    path: "/coc",
    children: [
      {
        path: "application_process",
        element: <ApplicationProcess />,
      },
      { path: "requirements", element: <Requirements /> },
      { path: "guidelines", element: <Guidelines /> },
    ],
  },
  {
    path: "/ipoips",
    children: [
      {
        path: "registration_process",
        element: <Ipoprocess />,
      },
      { path: "requirements", element: <Iporequirements /> },
      { path: "Ipoguidelines", element: <Ipoguidelines /> },
    ],
  },

  {
    path: "/ipmr",
    children: [
      {
        path: "selection_process",
        element: <Ipmrprocess />,
      },
      { path: "Ipmrreq", element: <Ipmreq /> },
      { path: "guidelines", element: <Ipmrguide /> },
    ],
  },
  // NOTE: Testing Purpose Route
  {
    path: "demo_api",
    element: <DemoApi />
  },
  {
    path: "demo_form",
    element: <DemoForm />
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
  {
    path: "test/status",
    element: <AccountStatus />,
  },
];

export const publicRoutes = [
  {
    path: '/',
    element: <GuessLayout />,
    children: [...children]
  }
]
