import { RelatorioCarrosBanidosService } from "../services/RelatorioCarrosBanidosService";

class RelatorioCarrosBanidosController {
  
  static async generate(req, res, next) {
    RelatorioCarrosBanidosService.generate(req)
      .then(objs => res.json(objs))
      .catch(next);
  }
}

export { RelatorioCarrosBanidosController };