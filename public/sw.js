self.addEventListener("install", function (event) {
  console.log("Hello world from the Service Worker 🤙");
  console.log(Notification.permission);
  self.registration.showNotification("test");
});
