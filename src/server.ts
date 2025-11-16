import express from "express";
import { envConfig } from "./config";
import apiRoutes from "./routes/index";

const app = express();

app.use(express.json({limit: "10mb"}));
app.use(express.urlencoded({limit: "10mb", extended: true}));

app.use("/api", apiRoutes);

app.listen(envConfig.port, () => {
    console.log(`Server is running on port ${envConfig.port}`);
});
    