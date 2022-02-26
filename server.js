const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // <== Will be created later
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; // <== You can change the port

server.use(middlewares);
server.use(router);

server.listen(port);

// const express = require("express");
// const mongoose = require("mongoose");
// require("dotenv").config()


// const app = express();

// app.use(express.json());

// const connect = () => {
//   return mongoose.connect("mongodb+srv://bookmyshow:bookmyshow@cluster0.bv4ej.mongodb.net/BookMyShow?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//   });
// };

// app.get("/", (req,res)=>{
//   res.status(200).send("Server Is Working")
// })
// const locationSchema = new mongoose.Schema({
//   cinemas: String,
//   sub_region: String,
//   Languages: String,
//   price_range: String,
//   show_timings: String,
//   pricing_type: Array,
//   cancellation_availability: Boolean,
// });

// const cinemaSchema = new mongoose.Schema({
//   name: String,
//   sub_region: String,
//   cancellation_availability: String,
//   timings: Array,
// });

// const Cinema = mongoose.model("cinema", cinemaSchema);

// app.get("/cinema", async (req, res) => {
//   const cinemas = await Cinema.find({}).lean().exec();
//   res.status(200).json({
//     data: cinemas
//   });
// });

// const movieSchema = new mongoose.Schema({
//   movie_name: {
//     type: String,
//     required: false
//   },
//   cover_url: {
//     type: String,
//     required: false
//   },
//   banner_url: {
//     type: String,
//     required: false
//   },
//   release_date: {
//     type: String,
//     required: false
//   },
//   genre: {
//     type: String,
//     required: false
//   },
//   screen_types: {
//     type: Array,
//     required: false
//   },
//   languages: {
//     type: Array,
//     required: false
//   },
//   movie_duration: {
//     type: String,
//     required: false
//   },
//   rating: {
//     percentage: {
//       type: Number,
//       required: false
//     },
//     no_of_ratings: Number,
//     required: false
//   },
//   about_movie: {
//     type: String,
//     required: false
//   },
//   cast: {
//     type: Array,
//     required: false
//   },
//   crew: {
//     type: Array,
//     required: false
//   },
//   review: {
//     type: Array,
//     required: false
//   },
//   grade: {
//     type: String,
//     required: false
//   },
//   is_primier: {
//     type: Boolean,
//     required: false
//   }
// });

// const Movie = mongoose.model("movie", movieSchema);

// app.post("/movies", async (req, res) => {
//   const movie = await Movie.create(req.body);
//   res.status(201).json({
//     data: movie
//   });
// });
// app.get("/movies", async (req, res) => {
//   const movies = await Movie.find({}).lean().exec();
//   res.status(201).json({
//     data: movies
//   });
// });
// app.get("/movies/:id", async (req, res) => {
//   const movies = await Movie.findById(req.params.id).lean().exec();
//   res.status(201).json({
//     data: movies
//   });
// });
// app.patch("/movies/:id", async (req, res) => {
//   const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   });
//   res.status(201).json({
//     data: movie
//   });
// });


// let port =  process.env.PORT || 8000;
// const start = async () => {
//   await connect();
//   app.listen(port, () => {
//     console.log(`Listen on Port ${port}`);
//   });
// };
// start();