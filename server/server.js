import express from 'express'
import cors from 'cors'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.listen(process.env.PORT, ()=>{
    console.log('server is running.....!')
})