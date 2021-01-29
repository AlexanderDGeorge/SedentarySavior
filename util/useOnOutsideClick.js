import { useEffect } from "react";

export default function useOnOutsideCLick(ref, action) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        event.stopPropagation();
        event.preventDefault();
        action(event);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, action]);
}
