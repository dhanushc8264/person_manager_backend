import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import personRoutes from './routes/personRoutes.js'

dotenv.config()

const app = express();

connectDb()

app.use(express.json());

app.use(cors({
    origin : [process.env.CLIENT_URL],
    methods : ['GET','POST','PUT','DELETE','PATCH']
}));

const PORT = process.env.PORT 

app.get('/' , (req,res)=>{
    res.send({
        message : "Welcome"
    })
})


app.use("/api",personRoutes)


app.listen(8000 , ()=>{
    console.log(`Server running successfully on ${PORT}`)
})