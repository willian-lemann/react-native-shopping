import { useContext } from "react";
import { UIContext } from "../store/ui/UIProvider";

const useSearch = () => {
  const context = useContext(UIContext);
  return context;
};

export default useSearch;
