import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import Login from "../pages/Login";
import Page404 from "../pages/Page404";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute element={Login} isClosed={false} />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default AppRoutes;
