const express=require ("express")
const{mailrouter}=require("./routers/mailrouter")
const {smsRouter}=require ('./routers/SmsRouter')
const cors=require ("cors")


const port=5000
const app = express()
app.use(cors({
    origin:"http://localhost:3000",
    credentials:false,
    optionsSuccessStatus:200
}))
app.use(express.json())
app.use("/",mailrouter)
app.use ("/", smsRouter)
app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})
