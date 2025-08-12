import React, { Children, useContext } from "react";
import { MyRouterContext } from "./MyBrowserRouter";

const MyRoutes = ({ children }) => {
  const { currentPath } = useContext(MyRouterContext);

  let element;

  Children.forEach(children, (child) => {
    if (currentPath === child.props.path) {
      element = child;
    }
  });
  return element;
};

export default MyRoutes;
