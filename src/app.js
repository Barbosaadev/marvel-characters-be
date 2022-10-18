import express, { application } from "express";
import path from "path";
import cookieParser from "cookie-parser";

import { fetchApi } from "./api";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get("/dashboard/:id", (req, res) => {
  res.send(`<div>${req.params.id}</div>`)
});

app.get('/characters', async (req, res) => {
  try {
      const response = await fetchApi("/characters");
      const data = await response.json();
      res.json({
        data
      })
      
  } catch(err) {
    console.log(err);
  }
})

app.post("/auth/signup/", async (req, res, next) => {
  try {
    const {name, email, password} = req.body;
    console.log(req.body);

    res.json({

    })
  } catch (err) {

  }
});

export default app;