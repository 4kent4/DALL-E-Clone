import mongoose from "mongoose";

const connectDB = async (URI) => {
	try {
		mongoose.set("strictQuery", false);
		const conn = await mongoose.connect(URI);
		console.log(`connected to ${conn.connection.host}`);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

export default connectDB;
