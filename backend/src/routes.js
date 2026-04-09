import express from "express";
import { ModeloController } from "./controllers/ModeloController.js";

const routes = express.Router();

routes.get('/modelos', ModeloController.findAll);
routes.post('/modelos', ModeloController.create);
routes.delete('/modelos/:id', ModeloController.delete);

export default routes;