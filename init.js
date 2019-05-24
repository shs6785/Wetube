import app from "./app";

const PORT = 4000;

const handleListening = () =>
  console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
app.get("/test", (req, res) => res.send("테스트"))