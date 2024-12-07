import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
// cors and cookieParser are configured after the creation of the app

const app = express()

// we use app.use() when we want to configure settings and middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// configure json
app.use(express.json({limit: "16kb"}))

// configure url
// we can just leave an empty space inside urlencoded() but here extended is use to create nested objects
app.use(express.urlencoded({extended: true, limit: "16kb"}))

// to store some info like pdfs etc in the server which is accessible to anyone
app.use(express.static("public"))

// to access and set(perform CRUD operation) the cookies present inside the user's browser
app.use(cookieParser())

export {app}