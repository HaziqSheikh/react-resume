import express from "express";
import path from "path";

const app = express();

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.json({ message: "Api is working" });
  });
}

const port = process.env.PORT || 5000;
const mode = process.env.NODE_ENV;
app.listen(port, "0.0.0.0", () => {
  console.log(
    `Application is running at port no ${port} in ${mode} mode`.inverse.cyan
  );
});
