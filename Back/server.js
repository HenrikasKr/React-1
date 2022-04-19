const mongoose = require("mongoose");
const app = require('./app');


const DB =
  "mongodb+srv://HenrikasKr:smt2NPEvlbqlIEEX@praktika.bwr9h.mongodb.net/students";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Prisijungta prie DB...");
  });

const port = 4000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
