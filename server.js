const express = require("express");
const app = express();
const cors = require('cors');

const committeeRoutes = require('./routes/committeeRoute');

// const mongoose = require("mongoose");
// const express = require("express");
// const cors = require('cors');
// const app = express();
// // require("dotenv").config();

// //Import Routes
// // const reminderRoutes =require('./Routes/reminderRoutes');


// const port = process.env.PORT || 8000
// const db_URL =   'mongodb+srv://slmun:slmun123@cluster0.6hv2ury.mongodb.net/?retryWrites=true&w=majority'
// // db
// mongoose.connect(
//   db_URL,
//   {
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (err) => {
//     if (err) throw err;
//     console.log("db connected");
//     app.listen(port, () => {
//       console.log("server is active");
//     });
//   }
// );

// // mw
// app.use(express.json());
// express.urlencoded({ extended: true });
// app.use(cookieParser());
// app.use("/uploads", express.static("uploads"));
// app.use(cors({ origin: true, credentials: true }));

// // routes
// // app.use(reminderRoutes);






// const session = require("express-session");
// const MongoDBStore = require("connect-mongodb-session")(session);
// const router = express.Router();
// const morgan = require("morgan");
const mongoose = require("mongoose");
// const path = require("path");
// const helmet = require('helmet');
// const cors = require('cors');
const bodyparser = require('body-parser');

// app.use(bodyparser.json());
// app.use(cors());

const DB_URL ='mongodb+srv://slmun:slmun@cluster0.h0qecvi.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 8000;



// const {
//     HOST,
//     PORT,
//     SESS_SECRET,
//     NODE_ENV,
//     IS_PROD,
//     COOKIE_NAME
//   } = require("./config/config");
//   const { MongoURI } = require("./config/database");
//   const MAX_AGE = 1000 * 60 * 60 * 3; // Three hours
//   // const IS_PROD = NODE_ENV === "production";
  

//Establish Connection with Mongoose Server --> ZooMelaka Cluster 
mongoose.connect(DB_URL,{
    useUnifiedTopology: true,
    useNewUrlParser:true}).then(()=>{
    console.log("==================Mongoose Connection Successful===========================");
}).catch((err)=>{
    console.log('DB Connnection Error',err);
})



// mongoose.connect(DB_URL,{
//   useUnifiedTopology: true,
//   useNewUrlParser:true,
//   useFindAndModify: false 
// }).then(()=>{
//   console.log("==================Mongoose Connection Successful===========================");
// }).catch((err)=>{
//   console.log('DB Connnection Error',err);
// })
 
// // setting up connect-mongodb-session store
// const mongoDBstore = new MongoDBStore({
//     uri: DB_URL,
//     collection: "mySessions"
//   });

// // Express Bodyparser
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

app.use(bodyparser.json());
app.use(express.json());
express.urlencoded({ extended: true });
app.use(cors({ origin: true, credentials: true }));

app.use(committeeRoutes);

// //Morgan setup
// app.use(morgan("dev"));

// // Express-Session
// app.use(
//   session({
//     name: COOKIE_NAME, //name to be put in "key" field in postman etc
//     secret: SESS_SECRET,
//     resave: true,
//     saveUninitialized: false,
//     store: mongoDBstore,
//     cookie: {
//       maxAge: MAX_AGE,
//       sameSite: false,
//       secure: IS_PROD
//     }
//   })
// );

// app.use(helmet())

// // Below corsOptions are for Local development
// const corsOptions = {
//   origin: 'http://localhost:3000',
//   credentials: true,
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

// // Below corsOptions work in deployment as Docker containers
// const corsOptionsProd = {
//   origin: 'http://localhost',
//   credentials: true,
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

// app.use(cors(corsOptions));


// app.use("/api/users", require("./routes/users"));

//Port establish server
app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});
