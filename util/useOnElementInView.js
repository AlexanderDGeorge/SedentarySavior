import { useEffect } from "react";

function isElementInViewport(ref) {
  var rect = ref.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight) /* or $(window).height() */ &&
    rect.right <=
      (window.innerWidth ||
        document.documentElement.clientWidth) /* or $(window).width() */
  );
}

export default function useOnElementInView(ref, callback) {
  useEffect(() => {
    function triggerCallback() {
      if (ref.current && isElementInViewport(ref.current)) {
        callback();
      }
    }

    document.addEventListener("wheel", triggerCallback);
    return () => {
      document.removeEventListener("wheel", triggerCallback);
    };
  }, []);
}
