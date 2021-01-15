import { useRef, useState } from "react";

// these routes should coincide with features of the application
const ROUTES = [
  "home",
  "progress",
  "avatar",
  "timer",
  "settings",
  "create",
] as const;

export default function useRouter() {
  // this is just a basic routing system
  // bc this is an extension we can't use browser routing
  // nested routes are not permitted

  const [currentRoute, setCurrentRoute] = useState("");
  const routeStack = useRef([""]);
  const routeIndex = useRef(0);

  const pushRoute = (route: typeof ROUTES[number]) => {
    // if we aren't at the top of the stack we need to
    // remove all routes above current position

    if (routeIndex.current !== routeStack.current.length) {
      const stacklength = routeStack.current.length;
      const index = routeIndex.current;
      for (let i = stacklength - index; i < stacklength; i++) {
        routeStack.current.pop();
      }
    }
    routeStack.current.push(route);
    setCurrentRoute(route);
  };

  const goBack = () => {
    if (routeStack.current.length > 1) {
      routeIndex.current--;
      setCurrentRoute(routeStack.current[routeIndex.current]);
    }
  };

  const goForward = () => {
    if (routeIndex.current < routeStack.current.length) {
      routeIndex.current++;
      setCurrentRoute(routeStack.current[routeIndex.current]);
    }
  };

  return { currentRoute, pushRoute, goBack, goForward };
}
