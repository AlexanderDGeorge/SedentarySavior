const notifier = require("node-notifier");

export default function handler(req, res) {
  notifier.notify("Test");
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ name: "John Doe" }));
}
