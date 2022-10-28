import * as dotenv from 'dotenv';
dotenv.config();
import express, { Application, Request, Response } from 'express';

const app: Application = express();

const getHomeController = async (_: Request, res: Response): Promise<Response> => {
  return res.status(200).json({
    message: 'Hello Atradius'
  });
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home
app.get('/', getHomeController);

const port = process.env.PORT || 3000;

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error: any) {
    console.error(`Error occured: ${error.message}`);
}