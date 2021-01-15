import useUser from "./util/useUser";
import styled from "styled-components";
import useRouter from "./util/useRouter";
import UserCreate from "./Components/User/UserCreate";

export default function App() {
  const { user } = useUser();

  // Notification.requestPermission();

  console.log(user);

  if (user) {
    console.log("here");
    return (
      <StyledApp>
        <Router user={user} />
      </StyledApp>
    );
  } else {
    return (
      <StyledApp>
        <UserCreate />
      </StyledApp>
    );
  }
}

const StyledApp = styled.div`
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.bg};
`;

function Router({ user }) {
  const { currentRoute } = useRouter();

  switch (currentRoute) {
    case "home":
      return <h1>Home</h1>;
    default:
      return <h1>Default</h1>;
  }
}
