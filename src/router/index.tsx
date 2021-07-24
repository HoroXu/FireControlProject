import Home from "../pages/Home";
import DetailPage from "../pages/Detail";
import TablePage from "../pages/TablePage";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/DetailPage",
    component: DetailPage,
  },
  {
    path: "/TablePage",
    component: TablePage,
  },
];

export default routes;
