import express from 'express'
import cors from 'cors'
import {connectDb} from './config/db.js'
import productRouter from './routes/productRoute.js';


const app = express();
const port = 4000;

//Db connection

connectDb()

//middilweare
app.use(express.json())
app.use(cors())

//api endPoint
app.use('/api/product',productRouter)

app.get('/',(req,res)=> {
	res.send("API WORKING")
})

app.listen(port,()=> {
	console.log(`server Started http://localhost:${port}`)
})

//the string is working for you. use this

// mongodb+srv://innuinshad:<db_password>@cluster0.a6bkw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// mongodb://innuinshad:<db_password>@cluster0-shard-00-00.a6bkw.mongodb.net:27017,cluster0-shard-00-01.a6bkw.mongodb.net:27017,cluster0-shard-00-02.a6bkw.mongodb.net:27017/?ssl=true&replicaSet=atlas-3y35qa-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0