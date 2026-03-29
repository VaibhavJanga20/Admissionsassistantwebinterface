import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { ChatPage } from "./pages/ChatPage";
import { AdminDashboard } from "./pages/AdminDashboard";
import { ResponsiveShowcase } from "./pages/ResponsiveShowcase";
import { NavigationIndex } from "./pages/NavigationIndex";
import { UIComponentShowcase } from "./components/UIComponents";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/chat",
    Component: ChatPage,
  },
  {
    path: "/admin",
    Component: AdminDashboard,
  },
  {
    path: "/responsive",
    Component: ResponsiveShowcase,
  },
  {
    path: "/components",
    Component: UIComponentShowcase,
  },
  {
    path: "/nav",
    Component: NavigationIndex,
  },
]);