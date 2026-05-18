import { RelatorioUsuariosSaidasService } from "../services/RelatorioUsuariosSaidasService.js";

class RelatorioUsuariosSaidasController {
  static async generate(req, res, next) {
    RelatorioUsuariosSaidasService.generate(req)
      .then((objs) => res.json(objs))
      .catch(next);
  }
}

export { RelatorioUsuariosSaidasController };
