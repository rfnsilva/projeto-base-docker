import { Router, Request, Response } from 'express';

import {
    cadastrar, getUser, getUsers
} from './controllers/cadastroController';

import cors from 'cors'

const routes = Router();
routes.use(cors());

//rota raiz
routes.get('/', (request: Request, response: Response) => {
    return response.json({ message: "PRONTO CARALHOOOOO !" })
});

//cadastrar usuario
routes.post('/cadastrar', cadastrar); // feito

//pegar usuario
routes.get('/getUser/:id', getUser); // feito

//pegar usuario
routes.get('/getUsers', getUsers); // feito

export default routes;