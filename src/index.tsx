import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./components/pages/Home";

import { menu } from "./utils/menu";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const getChildren = () => {
  const children = [{ element: <Home />, path: "/" }];
  for (const item of menu) {
    let element: JSX.Element;

    switch (item.name) {
      case "HOME":
        element = <Home />;
        break;

      default:
        element = <Home />;
        break;
    }

    children.push({
      path: item.action,
      element,
    });
  }

  return children;
};

root.render(
  <React.StrictMode>
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <App />,
          children: getChildren(),
        },
      ])}
    />
  </React.StrictMode>
);
