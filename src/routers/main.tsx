import CountryDetailPage from "@/pages/CountryDetailPage";
import HomePage from "@/pages/HomePage";
import { useRoutes } from "react-router-dom";

const MainRouter = () => {
  return useRoutes([
    {
      path: `/`,
      element: <HomePage />,
    },
    {
      path: `/:code`,
      element: <CountryDetailPage />,
    },
  ]);
};

export default MainRouter;
