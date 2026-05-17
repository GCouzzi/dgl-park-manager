import express from "express";
import { ModeloController } from "./controllers/ModeloController.js";
import { VeiculoController } from "./controllers/VeiculoController.js";
import { DespesaController } from "./controllers/DespesaController.js";
import { ClienteController } from "./controllers/ClienteController.js";
import { VagaController } from "./controllers/VagaController.js";
import { TipoServicoController } from "./controllers/TipoServicoController.js";
import { UsuarioController } from "./controllers/UsuarioController.js";
import { SaidaController } from "./controllers/SaidaController.js";
import { EntradaController } from "./controllers/EntradaController.js";
import { ServicoController } from "./controllers/ServicoController.js";
import { RelatorioCarrosBanidosController } from "./controllers/RelatorioCarrosBanidosController.js";
import { RelatorioFinanceiroController } from "./controllers/RelatorioFinanceiroController.js";
import { RelatorioEntradasVeiculosController } from "./controllers/RelatorioEntradasVeiculosController.js";
import { RelatorioUsuariosEntradasController } from "./controllers/RelatorioUsuariosEntradasController.js";


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

routes.get('/clientes', ClienteController.findAll);
routes.get('/clientes/:id', ClienteController.findByPk);
routes.post('/clientes', ClienteController.create);
routes.delete('/clientes/:id', ClienteController.delete);
routes.put('/clientes/:id', ClienteController.update);

routes.get('/vagas', VagaController.findAll);
routes.get('/vagas/:id', VagaController.findByPk);
routes.post('/vagas', VagaController.create);
routes.delete('/vagas/:id', VagaController.delete);
routes.put('/vagas/:id', VagaController.update);

routes.get('/tipo-servico', TipoServicoController.findAll);
routes.get('/tipo-servico/:id', TipoServicoController.findByPk);
routes.post('/tipo-servico', TipoServicoController.create);
routes.delete('/tipo-servico/:id', TipoServicoController.delete);
routes.put('/tipo-servico/:id', TipoServicoController.update);

routes.get('/usuarios', UsuarioController.findAll);
routes.get('/usuarios/:id', UsuarioController.findByPk);
routes.post('/usuarios', UsuarioController.create);
routes.delete('/usuarios/:id', UsuarioController.delete);
routes.put('/usuarios/:id', UsuarioController.update);

routes.get('/entradas', EntradaController.findAll);
routes.get('/entradas/:id', EntradaController.findByPk);
routes.post('/entradas', EntradaController.create);
routes.delete('/entradas/:id', EntradaController.delete);
routes.put('/entradas/:id', EntradaController.update);

routes.get('/saidas', SaidaController.findAll);
routes.get('/saidas/calculo', SaidaController.calcular);
routes.get('/saidas/:id', SaidaController.findByPk);
routes.post('/saidas', SaidaController.create);
routes.delete('/saidas/:id', SaidaController.delete);
routes.put('/saidas/:id', SaidaController.update);

routes.get('/servicos', ServicoController.findAll);
routes.get('/servicos/:id', ServicoController.findByPk);
routes.post('/servicos', ServicoController.create);
routes.delete('/servicos/:id', ServicoController.delete);
routes.put('/servicos/:id', ServicoController.update);

routes.get('/relatorios/carros-banidos', RelatorioCarrosBanidosController.generate);
routes.get('/relatorios/financeiro', RelatorioFinanceiroController.generate);
routes.get('/relatorios/entradas-veiculos', RelatorioEntradasVeiculosController.generate);
routes.get('/relatorios/usuarios-entradas', RelatorioUsuariosEntradasController.generate);

export default routes;