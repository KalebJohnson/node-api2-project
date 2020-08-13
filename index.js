const express = require("express")
const postsRouter = require("./posts/posts-router")

const server = express()
const port = process.env.PORT || 4000

server.use(express.json())

//connecting router
server.use(postsRouter)

server.listen(port, () => {
	console.log(`Server running on ${port}`)
})