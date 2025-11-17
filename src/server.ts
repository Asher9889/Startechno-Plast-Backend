import express from "express";
import cors from "cors";
import { envConfig } from "./config";
import apiRoutes from "./routes/index";
import { globalErrorHandler, routeNotExistsHandler } from "./utils";
import { connectMongoDB } from "./db";

const app = express();

connectMongoDB();

app.use(express.json({limit: "10mb"}));
app.use(express.urlencoded({limit: "10mb", extended: true}));

app.use(cors());
app.use("/api", apiRoutes);

app.use(routeNotExistsHandler)
app.use(globalErrorHandler);

app.listen(envConfig.port, () => {
    console.log(`Server is running on port ${envConfig.port}`);
});
    