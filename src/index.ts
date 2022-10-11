import express, { Request, Response } from "express";
import userRoutes from "./routes/userRoutes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  return res.status(200).send({
    message: "Hello World!",
  });
});

app.use(userRoutes);

app.listen(3000, () => console.log("App is running on http://localhost:3000"));
