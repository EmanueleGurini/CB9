import mongoose, { Schema } from "mongoose"


mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const pizzaSchema = new Schema(
	{
		name: String,
		ingredienti: Array,
	}
)

const Pizza = mongoose.models.Pizza || mongoose.model("Pizza", pizzaSchema)
export default Pizza