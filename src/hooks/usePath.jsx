import { useLocation, useOutletContext } from "react-router-dom";

const useCurrentPath = () => {
  const [currentPath, setCurrentPath] = useOutletContext();
  const { pathname } = useLocation();

  const setPath = () => {
    const lastPath = pathname.split("/").pop();
    currentPath !== lastPath && setCurrentPath(lastPath);
  };

  return { setPath };
};

export default useCurrentPath;
