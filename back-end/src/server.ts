import { Router, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

//Middleware
import { HttpExceptionHandler } from './Middlewares/httpExceptions';
import { retryConnectionHandler, prismaErrorsHandler } from './Middlewares/dbExceptionsHandler';
import { failSafeHandler } from './Middlewares/failSafeHandler';
// Routes
import UserRoutes from './Controllers/users.controller';
import RolesRoutes from './Controllers/roles.controller';
import SessionRoutes from './Controllers/session.controller';
import CategoryRoutes from './Controllers/categories.controller';
import CountryRoutes from './Controllers/countries.controller';
import FavoriteRoutes from './Controllers/favorites.controller';
import DenuciationRoutes from './Controllers/denuciations.controller';
import DrinkRoutes from './Controllers/drinks.controller';

dotenv.config()

const app = express();

const route = Router();

app.use(cors());
app.use(express.json());

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
})
 
app.use('/session', SessionRoutes);
app.use('/roles', RolesRoutes, );
app.use('/user', UserRoutes);
app.use('/category', CategoryRoutes);
app.use('/country', CountryRoutes);
app.use('/drink', DrinkRoutes);
app.use('/favorite', FavoriteRoutes);
app.use('/denuciation', DenuciationRoutes);

app.use(route)
app.use(HttpExceptionHandler)
app.use(prismaErrorsHandler)
app.use(retryConnectionHandler)
app.use(failSafeHandler)

app.listen(process.env.PORT ?? 3000, () => `server running on port ${process.env.PORT ?? 3000}`)