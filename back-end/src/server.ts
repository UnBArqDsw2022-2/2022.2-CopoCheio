import { Router, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

//Middleware
import { HttpExceptionHandler, PathNotFoundExceptionHandler } from './HttpExceptions/httpExceptions';

// Routes
import UserRoutes from './Users/users.controller';
import RolesRoutes from './Roles/roles.controller';
import SessionRoutes from './Controllers/session.controller';

dotenv.config()

const app = express();

const route = Router();

app.use(cors());
app.use(express.json());

route.get('/', (req: Request, res: Response) => {  
  res.json({ message: 'hello world with Typescript' })
})

app.use('/session', SessionRoutes);
app.use('/roles', RolesRoutes);
app.use('/user', UserRoutes);

app.use(route)
app.use(HttpExceptionHandler)
app.use(PathNotFoundExceptionHandler)

app.listen(process.env.PORT ?? 3000, () => `server running on port ${process.env.PORT ?? 3000}`)