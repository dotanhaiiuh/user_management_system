var express = require("express");
var dotenv = require("dotenv").config();
var cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const md5 = require("md5");
const mongoose = require("mongoose");
var userRoute = require("./routes/users_route");

var app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", "./views");

// Khởi tạo server
var server = require("http").createServer(app);
server.listen(8888);

// Kết nối tới database
mongoose.connect(process.env.MONGO_URL);

// Xử lý cá yêu cầu từ Client
app.use("/users", userRoute);