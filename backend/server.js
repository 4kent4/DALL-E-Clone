import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/connectDB.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

const PORT = process.env.PORT || 6000;

app.use((req, res, next) => {
	console.log(`${req.path} ${req.method}`);
	next();
});

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => {
	res.send("Hello from DALL-E");
});

const startServer = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(PORT, () =>
			console.log(`listening to port http://localhost:${PORT}`)
		);
	} catch (error) {
		console.log(error);
	}
};

startServer();
