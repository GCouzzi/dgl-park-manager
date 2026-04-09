import express from "express";
import { ModeloController } from "./controllers/ModeloController.js";
import { VeiculoController } from "./controllers/VeiculoController.js";

const routes = express.Router();

routes.get('/modelos', ModeloController.findAll);
routes.post('/modelos', ModeloController.create);
routes.delete('/modelos/:id', ModeloController.delete);

routes.get('/veiculos', VeiculoController.findAll);
routes.get('/veiculos/:id', VeiculoController.findByPk);
routes.post('/veiculos', VeiculoController.create);
routes.delete('/veiculos/:id', VeiculoController.delete);
routes.patch('/veiculos/:id', VeiculoController.update);

export default routes;