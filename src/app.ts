import express from "express";
import { router } from './routes'
import cors from "cors";
import cookieParser from 'cookie-parser'

const app = express();

app.use(cors())
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());
app.use(router);

export { app }