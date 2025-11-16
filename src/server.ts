import express from "express";
import { envConfig } from "./config";
import apiRoutes from "./routes/index";
import { globalErrorHandler, routeNotExistsHandler } from "./utils";

const app = express();

app.use(express.json({limit: "10mb"}));
app.use(express.urlencoded({limit: "10mb", extended: true}));

app.use("/api", apiRoutes);

app.use(routeNotExistsHandler)
app.use(globalErrorHandler);

app.listen(envConfig.port, () => {
    console.log(`Server is running on port ${envConfig.port}`);
});
    