import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - News dragon`;
  }, [title]);
};

export default useTitle;
