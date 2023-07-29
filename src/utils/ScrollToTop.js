import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo('#navbar');
  }, [pathname]);

  return null;
}

export default ScrollToTop;
