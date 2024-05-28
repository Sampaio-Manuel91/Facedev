const {WebSocketServer } = require("ws")

const wss = new WebSocketServer ({ port:process.env .PORT ||8080 })

const dotenv = require("dotenv")

dotenv.config() 

wss.on("connection" , (ws) =>{
 ws.on("error" , console.error )

 ws.on("message" , (data) =>{
     wss.clients .forEach((client) => client.send(data.toString()))
     
  })


  console.log("Cliente conectado")
} )  
