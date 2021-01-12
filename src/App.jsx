import useFetchUser from "./util/useFetchUser";

export default function App() {
  const { user } = useFetchUser();

  Notification.requestPermission();

  console.log(user);
  return (
    <div className="App">
      <h1>Sedentary Savior</h1>
    </div>
  );
}
