import { RelatorioEntradasVeiculosService } from "../services/RelatorioEntradasVeiculosService.js";

class RelatorioEntradasVeiculosController {
  
  static async generate(req, res, next) {
    RelatorioEntradasVeiculosService.generate(req)
      .then(objs => res.json(objs))
      .catch(next);
  }
}

export { RelatorioEntradasVeiculosController };
