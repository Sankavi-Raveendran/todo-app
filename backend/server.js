import app, { initDb } from "./app.js";

const PORT = process.env.PORT || 4000;

initDb().then(() => {
  app.listen(PORT, () => console.log("Backend running on port", PORT));
});
