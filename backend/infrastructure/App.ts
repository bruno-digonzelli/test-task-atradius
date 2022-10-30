import * as dotenv from 'dotenv';
dotenv.config();
import express, { Application } from 'express';
import { METHODS } from 'application';
import HomepageController from 'application/services/HomepageController';
import UsersController from 'application/services/UsersController';
import NotFoundController from 'application/services/NotFoundController';
import UsersData from './dataSource/UsersData';
import cors from 'cors';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
  
// Home
app.get('/', (_, res) => HomepageController(METHODS.GET, res));

// Users
app.get('/users', (_, res) => UsersController(METHODS.GET, res, UsersData));

// 404
app.get('*', (_, res) => NotFoundController(METHODS.GET, res));

const port = process.env.PORT || 3000;

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error: any) {
    console.error(`Error occured: ${error.message}`);
}