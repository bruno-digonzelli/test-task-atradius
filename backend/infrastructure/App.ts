import * as dotenv from 'dotenv';
dotenv.config();
import express, { Application } from 'express';
import HomepageController, { METHODS } from 'application/services/HomepageController';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
  
// Home
app.get('/', (_, res) => HomepageController(METHODS.GET, res));

const port = process.env.PORT || 3000;

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error: any) {
    console.error(`Error occured: ${error.message}`);
}