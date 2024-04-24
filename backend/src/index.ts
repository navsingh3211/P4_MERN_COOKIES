import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import jwt, { JwtPayload } from "jsonwebtoken";
import path from "path";

const JWT_SECRET = 'nrienrfrien32323nm4nm24'

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));

app.post("/signin", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // do db validations, fetch id of user from db
  const token = jwt.sign({
      id: 1
  }, JWT_SECRET);
  res.cookie("_Secure_next_auth", token);
  res.send("Logged in!");
});

app.get("/user", (req, res) => {
  const token = req.cookies._Secure_next_auth;
  const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
  // Get email of the user from the database
  res.send({
      userId: decoded.id
  })
});

app.post("/logout", (req, res) => {
  res.clearCookie("_Secure_next_auth");
  // res.cookie("_Secure_next_auth", "");
  res.json({
      message: "Logged out!"
  })
});

app.listen(8085,()=>{
  console.log('our app is listening on 8085 port');
  
});