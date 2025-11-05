import express from "express";
const app = express();
const port = 3000;

// listening
const listening = () => {
  app.listen(port, () => {
    console.log(`Server is listeing on port ${port}`);
  });
};

export default listening;
