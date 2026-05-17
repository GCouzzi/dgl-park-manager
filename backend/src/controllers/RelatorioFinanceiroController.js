import { RelatorioFinanceiroService } from "../services/RelatorioFinanceiroService.js";

class RelatorioFinanceiroController {
  
  static async generate(req, res, next) {
    RelatorioFinanceiroService.generate(req)
      .then(objs => res.json(objs))
      .catch(next);
  }
}

export { RelatorioFinanceiroController };