import express from "express";
import { envConfig } from "./config";
import apiRoutes from "./routes/index";
const app = express();

app.use(express.json());

app.use("/api", apiRoutes);

app.listen(envConfig.port, () => {
    console.log(`Server is running on port ${envConfig.port}`);
});
    