import Example from "@/components/data-viz/example";
import DemoApi from "@/pages/demo_api";
import ApplicationProcess from "@/pages/sub/coc/ApplicationProcess";
import Guidelines from "@/pages/sub/coc/Guidelines";
import Requirements from "@/pages/sub/coc/Requirements";
import Ipmrguide from "@/pages/sub/ipmr/Ipmrguidelines";
import Ipmrprocess from "@/pages/sub/ipmr/Ipmrprocess";
import Ipmreq from "@/pages/sub/ipmr/ipmrreq";
import Ipoguidelines from "@/pages/sub/ipoips/Ipoguidelines";
import Ipoprocess from "@/pages/sub/ipoips/Ipoprocess";
import Iporequirements from "@/pages/sub/ipoips/Iporequirements";

export const publicRoutes = [
  {
    path: "/coc",
    children: [
      {
        path: "application-process",
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
    path: "test/data-viz",
    element: <Example />,
  },
];
