import express from "express";
import { ModeloController } from "./controllers/ModeloController.js";
import { VeiculoController } from "./controllers/VeiculoController.js";
import { DespesaController } from "./controllers/DespesaController.js";

const routes = express.Router();

routes.get('/modelos', ModeloController.findAll);
routes.post('/modelos', ModeloController.create);
routes.delete('/modelos/:id', ModeloController.delete);

routes.get('/veiculos', VeiculoController.findAll);
routes.get('/veiculos/:id', VeiculoController.findByPk);
routes.post('/veiculos', VeiculoController.create);
routes.delete('/veiculos/:id', VeiculoController.delete);
routes.put('/veiculos/:id', VeiculoController.update);

routes.post('/despesas', DespesaController.create);
routes.get('/despesas', DespesaController.findAll);
routes.get('/despesas/:id', DespesaController.findByPk);
routes.delete('/despesas/:id', DespesaController.delete);
routes.put('/despesas/:id', DespesaController.update);

export default routes;