import { createContext, useContext, useState, useLayoutEffect } from "react";

const BASE = 768;

const GlobalStateContext = createContext({
  isMobile: window.innerWidth <= BASE,
});
const { Provider: GlobalStatesProvider } = GlobalStateContext;

export const Provider = ({ children }) => {
  const [isMobile, setMobile] = useState(window.innerWidth <= BASE);

  useLayoutEffect(() => {
    function updateSize() {
      setMobile(window.innerWidth <= BASE);
    }

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <GlobalStatesProvider value={{ isMobile }}>{children}</GlobalStatesProvider>
  );
};

export const useGlobalStateContext = () => {
  return useContext(GlobalStateContext);
};
