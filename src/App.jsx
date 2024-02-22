import { VsxIcon } from "@/";
import Layout from "./components/Layout";
// import First from "./components/First";
import { Suspense, lazy } from "react";
import { Route, Routes, useRoutes } from "react-router-dom";
function App() {
  const First = lazy(() => import("./components/First.jsx"));

  const routes = [
    {
      element: <Layout />,
      path: "/",
      children: [
        {
          path: "1",
          element: <First />,
        },
      ],
    },
  ];

  return (
    <Suspense fallback="test">
      {/* <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<First />} path="1"></Route>
        </Route>
      </Routes> */}
      {useRoutes(routes)}
    </Suspense>
  );
}

export default App;
