import { RelatorioUsuariosEntradasService } from "../services/RelatorioUsuariosEntradasService.js";

class RelatorioUsuariosEntradasController {
  
  static async generate(req, res, next) {
    RelatorioUsuariosEntradasService.generate(req)
      .then(objs => res.json(objs))
      .catch(next);
  }
}

export { RelatorioUsuariosEntradasController };
