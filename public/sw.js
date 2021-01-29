self.addEventListener("install", function (event) {
  console.log("Hello world from the Service Worker 🤙");
  console.log(self);
});

function getEndpoint() {
  return self.registration.pushManager.getSubscription();
}

self.addEventListener("push", function (event) {
  event.waitUntil(
    getEndpoint().then(function (endpoint) {
      console.log(endpoint);
    })
  );
});
