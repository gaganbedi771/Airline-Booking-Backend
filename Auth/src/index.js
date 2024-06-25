const express = require("express");
const { PORT } = require("./config/serverConfig");
const userRoutes = require("./routes/index");
const db = require("./models/index");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", userRoutes);

app.listen(PORT, async () => {
  if (process.env.SYNC_DB == "true") {
    await db.sequelize.sync({ alter: true });
  }

  console.log("Flight search server is running on port", PORT);
});
