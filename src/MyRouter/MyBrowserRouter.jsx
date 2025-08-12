/**
 * url change
 *
 * browser router
 * link component
 * routes
 * route
 *
 * history ( wont refresh page )
 * location ( will refresh page )
 */

import { createContext, useState, useEffect } from "react";

export const MyRouterContext = createContext(null);

const MyBrowserRouter = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <MyRouterContext value={{ currentPath, navigate }}>
      {children}
    </MyRouterContext>
  );
};

export default MyBrowserRouter;
