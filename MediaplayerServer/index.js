//1) import json server
const jsonServer = require('json-server')

//2) create path for db.json file using router function
const router = jsonServer.router("db.json")

//3)create middleweare to convert json to js - defaults()
const middleware = jsonServer.defaults()

//4) create json server

const mediaPlayerServer = jsonServer.create()  

//5) server should use middleware and router
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//6) set port for server