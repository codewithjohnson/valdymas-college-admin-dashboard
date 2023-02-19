import { useTransition } from "react";
import { useNavigate } from "react-router-dom";

const useDelayedNavigation = () => {
  const [_, startTransition] = useTransition();
  const navigate = useNavigate();

  return (to) => startTransition(() => navigate(to));
};

export default useDelayedNavigation;
