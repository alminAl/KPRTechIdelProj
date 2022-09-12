const express = require("express");
const videosRoutes = require("./routes/videos");
const mongoose = require("mongoose");

// express app
const app = express();

// middleware
app.use(express.json());
// app.use((req, res, next) => {
//     console.log(req.path, req.method)
//     next()
// })

// route
app.use("/api/videos", videosRoutes);

// connect to DB
mongoose
  .connect(
    "mongodb+srv://test:test1234@mearnapp.wjx6wek.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    // listen for request
    app.listen(4000, () => {
      console.log("I on listen for port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
