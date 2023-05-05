const express=require ("express")
const{mailrouter}=require("./routers/mailrouter")
const {smsRouter}=require ('./routers/SmsRouter')
const {authRouter}= require('./routers/userRouter')
const app = express()
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const cors=require ("cors")
io.on("connection", (socket)=>{
    console.log('user connected')
   
})

const port=5000

app.use(cors({
    origin:"http://localhost:3000",
    credentials:false,
    optionsSuccessStatus:200
}))
app.use(express.json())
app.use("/",mailrouter)
app.use ("/", smsRouter)
app.use('/', authRouter)

server.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})
