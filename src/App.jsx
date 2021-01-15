import useFetchUser from "./util/useFetchUser";
import styled from "styled-components";
import useRouter from "./util/useRouter";

export default function App() {
  const { user } = useFetchUser();

  Notification.requestPermission();

  if (user) {
    return (
      <StyledApp>
        <Router user={user} />
      </StyledApp>
    );
  } else {
    return (
      <StyledApp>
        <h1>User Creation Here</h1>
      </StyledApp>
    );
  }
}

const StyledApp = styled.div`
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.bg};
  display: flex;
  flex-direction: column;
  align-items: center;
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
