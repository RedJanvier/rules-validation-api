import "dotenv/config.js";
import http from "http";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import express from "express";
import routes from "./routes";
import { respond } from "./helpers";

const { PORT } = process.env;
const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(routes);
// Handle not found routes
app.use((req, res) => respond.error(res, "Route not found!", {}, 404));

server.listen(PORT, console.log(`Server started at http://localhost:${PORT}`));
