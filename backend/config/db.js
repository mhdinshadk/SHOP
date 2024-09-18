import mongoose, { connect, mongo } from "mongoose";

export const connectDb = async () => {
	await mongoose.connect('mongodb://innuinshad:user1234@cluster0-shard-00-00.a6bkw.mongodb.net:27017,cluster0-shard-00-01.a6bkw.mongodb.net:27017,cluster0-shard-00-02.a6bkw.mongodb.net:27017/SHOPSY?ssl=true&replicaSet=atlas-3y35qa-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0')
	.then(()=> console.log("DB Connect"))
}

// const connectDb = async () => {
// 	await mongoose.connect('mongodb+srv://innuinshad:<db_password>@cluster0.a6bkw.mongodb.net/SHOPSY')
// } 