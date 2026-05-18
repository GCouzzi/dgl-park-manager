import { RelatorioClientesMediaSaidaService } from "../services/RelatorioClientesMediaSaidaService.js";

class RelatorioClientesMediaSaidaController {
  static async generate(req, res, next) {
    RelatorioClientesMediaSaidaService.generate(req)
      .then((objs) => res.json(objs))
      .catch(next);
  }
}

export { RelatorioClientesMediaSaidaController };
